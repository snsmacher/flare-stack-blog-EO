import type { QueueMessage } from "@/lib/queue/queue.schema";

/**
 * 进程内队列替身。Cloudflare Queues 在 EdgeOne 上没有对应物，而邮件/Webhook
 * 通知的上游代码都往 `env.QUEUE.send` 投递——没有这个替身，投递点直接
 * TypeError，把已经落库的主操作（评论、友链申请）拖成 500。
 *
 * `send` 即本地分发：fire-and-forget 地跑 `handleQueueBatch` 的同款消费逻辑，
 * 不阻塞调用方（SMTP 一封信可能要跑十几秒）。没有持久化与重试：容器重启
 * 即丢，失败只留日志——通知本就是尽力而为的旁路，不该反过来拖垮主操作。
 */
export function createInProcessQueue(getEnv: () => Env): Queue<QueueMessage> {
  const dispatch = async (messages: Array<QueueMessage>) => {
    // 动态 import 打断循环依赖：消费者链路摸到 config/db，而它们又依赖
    // nodeEnv 本身。
    const { handleQueueBatch } = await import("@/lib/queue/queue.handler");
    const batch = {
      messages: messages.map((body) => ({
        id: crypto.randomUUID(),
        timestamp: new Date(),
        body,
        attempts: 1,
        ack() {},
        retry() {},
      })),
    } as unknown as MessageBatch;
    const ctx = {
      waitUntil: (promise: Promise<unknown>) => {
        promise.catch(() => undefined);
      },
    } as ExecutionContext;
    await handleQueueBatch(batch, getEnv(), ctx);
  };

  const dispatchLogged = (messages: Array<QueueMessage>) => {
    dispatch(messages).catch((error) => {
      console.error(
        JSON.stringify({
          message: "in-process queue dispatch failed",
          error: error instanceof Error ? error.message : String(error),
        }),
      );
    });
  };

  // 空的积压指标：本地分发没有队列可言，只是把接口形状补齐。
  const noMetrics = {
    metadata: { metrics: { backlogCount: 0, backlogBytes: 0 } },
  };

  const queue: Queue<QueueMessage> = {
    metrics: async () => noMetrics.metadata.metrics,
    send: (body) => {
      dispatchLogged([body]);
      return Promise.resolve(noMetrics);
    },
    sendBatch: (items) => {
      dispatchLogged([...items].map((item) => item.body));
      return Promise.resolve(noMetrics);
    },
  };
  return queue;
}
