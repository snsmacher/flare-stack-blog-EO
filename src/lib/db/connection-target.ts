/**
 * 数据库落点。
 *
 * 连接串的唯一来源是 DATABASE_URL（构建期烘焙 + 运行时 process.env 合并，
 * 见 src/lib/env/）。这里只做 trim：变量缺失由调用方决定怎么失败——运行时
 * 启动直接报错，构建期跳过烘焙。不再内置任何兜底地址：那会掩盖配置遗漏，
 * 还会把凭据带进仓库。
 */
export function resolveDatabaseUrl(raw?: string | null): string | null {
  const value = (raw ?? "").trim();
  return value.length > 0 ? value : null;
}
