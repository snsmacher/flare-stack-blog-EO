/**
 * 数据库落点。
 *
 * 站点原先跑在 Neon 新加坡，国内访问每次往返 100ms 以上，列表和详情都要
 * 打两三次库，首屏肉眼可见地拖。现在换成阿里云杭州的 PostgreSQL 17.5
 * （Supabase 托管，opentrust.net 域名，实测 8ms 级）。
 *
 * EdgeOne 控制台里的 DATABASE_URL 不在这个仓库的控制范围内，所以这里做一次
 * 兜底解析：变量缺失、或还指着 Neon，就顶成国内库；已经指对了（哪怕换成别的
 * 自建库）就原样透传，不会硬绑死。构建期 vite 的 bake 插件和运行时 db 初始化
 * 共用这一处逻辑，避免两边判断不一致。
 */

/** 国内库（阿里云杭州）。密码里的 $ ! @ # 必须百分号编码，否则 @ 会被当成主机分隔符。 */
export const DOMESTIC_DATABASE_URL =
  "postgresql://postgres:yourpassword@yoursSQLDOMAIN:5432/postgres?sslmode=verify-full";

/** 需要被替换掉的外网库特征：Neon 的接入域名与默认库名。 */
const FOREIGN_HOST_PATTERN = /neon\.tech|neondb/i;

/**
 * 决定这次到底连哪个库。
 *
 * @param raw 环境变量里的原始连接串
 * @returns 实际要用的连接串，永远非空
 */
export function resolveDatabaseUrl(raw?: string | null): string {
  const value = (raw ?? "").trim();
  if (!value) return DOMESTIC_DATABASE_URL;
  if (FOREIGN_HOST_PATTERN.test(value)) return DOMESTIC_DATABASE_URL;
  return value;
}
