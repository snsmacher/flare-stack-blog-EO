import { Fragment } from "react";
import { m } from "@/paraglide/messages";
import { CopyLine } from "./copy-line";

/** 本仓库自己的 Skill 发布物：zip 随 Release 附带，安装命令指向本仓库的 tag。 */
const AGENT_SKILL_REPO = "snsmacher/flare-stack-blog-EO";
const AGENT_SKILL_URL = `https://github.com/${AGENT_SKILL_REPO}/releases/download/v${__APP_VERSION__}/flare-stack-blog-skills-v${__APP_VERSION__}.zip`;
const AGENT_SKILL_INSTALL_COMMAND = `npx skills add https://github.com/${AGENT_SKILL_REPO}/tree/v${__APP_VERSION__}/.agents/skills/flare-stack-blog -g`;

export function InstallStep() {
  const download = (
    <a
      href={AGENT_SKILL_URL}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline underline-offset-2"
    >
      {m.agent_skill_download({ version: __APP_VERSION__ })}
    </a>
  );
  // The slot goes in as a \0-wrapped name so each locale keeps its own word order.
  const parts = m
    .agent_skill_install_hint({ download: "\0download\0" })
    .split("\0");
  return (
    <>
      <p className="agent-skill-hint">
        {parts.map((part, index) =>
          index % 2 ? <Fragment key={part}>{download}</Fragment> : part,
        )}
      </p>
      <CopyLine
        text={AGENT_SKILL_INSTALL_COMMAND}
        copyLabel={m.common_copy_code()}
        copiedLabel={m.common_code_copied()}
      />
    </>
  );
}
