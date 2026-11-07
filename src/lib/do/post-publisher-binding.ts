import * as PostService from "@/features/posts/services/posts.service";
import { getDb } from "@/lib/db";
import { nodeEnv } from "@/lib/env/node-bindings";

const executionCtx = {
  waitUntil(promise: Promise<unknown>) {
    void Promise.resolve(promise).catch((error) => {
      console.error(
        JSON.stringify({
          message: "background task failed",
          error: String(error),
        }),
      );
    });
  },
  passThroughOnException() {},
} as unknown as ExecutionContext<unknown>;

// Replaces the PostPublisher Durable Object, whose only job was serializing
// publishes per post. An in-process chain gives the same guarantee on one node.
const chains = new Map<number, Promise<unknown>>();

function serialize<T>(postId: number, task: () => Promise<T>): Promise<T> {
  const previous = chains.get(postId) ?? Promise.resolve();
  const run = previous.then(task, task);
  const tracked = run.catch(() => undefined);
  chains.set(postId, tracked);
  void tracked.finally(() => {
    if (chains.get(postId) === tracked) chains.delete(postId);
  });
  return run;
}

export async function getPostPublisher(_postId: number) {
  const env = nodeEnv;
  const context = { env, db: getDb(env), executionCtx };

  return {
    publish(postId: number, saveToken?: string) {
      return serialize(postId, () =>
        PostService.publishPost(context, { id: postId, saveToken }),
      );
    },
    unpublish(postId: number) {
      return serialize(postId, () =>
        PostService.unpublishPost(context, { id: postId }),
      );
    },
  };
}
