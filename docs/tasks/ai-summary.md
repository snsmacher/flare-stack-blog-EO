# 任务（预备清单）：AI 摘要生成

> 2026-11-15 入列。站长优先级最高的 AI 功能：不想每次手动把全文丢给 AI 写摘要。
> 预估工作量：一天（含测试）。依赖：无数据库迁移。

## 需求

在编辑器/文章信息区加「AI 生成摘要」：一键读取全文，调用大模型生成 200 字
以内的摘要，填进 summary 字段供人工审改后再保存（人在回路，不自动落库）。

## 设计要点

1. **Provider**：OpenAI 兼容协议（chat/completions），EO AI 网关
   `https://ai-gateway.edgeone.link/v1`。后台新增「AI 设置」节：
   `baseUrl`（默认 EO 网关）/ `apiKey` / `model` 三项，存站点配置 JSON，
   **仅服务端读取，admin 快照对 apiKey 置空**（沿用通知 Webhook 密钥的
   既有模式，见 config.service 的脱敏逻辑）。
2. **Procedure**：`adminProcedure` + 限流；输入 `{ postId }`，服务端读
   `contentJson` 提取纯文本（复用 Markdown 导出链路），超长截断（摘要不需要
   全文，正文前 N 字符 + 标题 + 标签即可，省 token）。
3. **前端**：编辑器信息面板 summary 输入框旁加「AI 生成」按钮（含加载态与
   失败 toast），生成结果填入 summary 输入框，不直接保存。
4. **可扩展位**（本期不做，预留接口形状）：标签提取、一键成文走同一个
   provider 配置；评论 AI 审核二期再议。
5. **安全**：key 不下发浏览器；prompt 不含系统提示注入面（正文来自管理员
   自己的文章，风险低）；对 provider 响应做长度/格式校验。
6. **测试**：config 脱敏、procedure 鉴权、provider 响应解析、正文截断。

## 参考实现

demo-flare-blog（cxyqiyue/demo-flare-blog）有同款功能（摘要/标签/一键成文），
Provider 抽象可参考其形状；但我们是 OpenAI 兼容单 Provider + EO 网关，
实现更简单。
