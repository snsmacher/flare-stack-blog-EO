/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Agent_Skill_DownloadInputs */

const zh_agent_skill_download = /** @type {(inputs: Agent_Skill_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 Agent Skill（v${i?.version}）`)
};

const en_agent_skill_download = /** @type {(inputs: Agent_Skill_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download Agent Skill (v${i?.version})`)
};

/**
* | output |
* | --- |
* | "Download Agent Skill (v{version})" |
*
* @param {Agent_Skill_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_download = /** @type {((inputs: Agent_Skill_DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_download(inputs)
	return zh_agent_skill_download(inputs)
});