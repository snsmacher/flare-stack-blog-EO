/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ download: NonNullable<unknown> }} Agent_Skill_Install_HintInputs */

const zh_agent_skill_install_hint = /** @type {(inputs: Agent_Skill_Install_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`安装后，AI agent 即可撰写、发布和管理文章。已安装 Node.js 时，运行下方命令即可安装；也可${i?.download}并解压到 agent 的 skill 目录。`)
};

const en_agent_skill_install_hint = /** @type {(inputs: Agent_Skill_Install_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Once installed, an AI agent can write, publish and manage posts. With Node.js installed, run the command below, or ${i?.download} and unzip it into the agent's skills folder.`)
};

/**
* | output |
* | --- |
* | "Once installed, an AI agent can write, publish and manage posts. With Node.js installed, run the command below, or {download} and unzip it into the agent's s..." |
*
* @param {Agent_Skill_Install_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_install_hint = /** @type {((inputs: Agent_Skill_Install_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Install_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_install_hint(inputs)
	return zh_agent_skill_install_hint(inputs)
});