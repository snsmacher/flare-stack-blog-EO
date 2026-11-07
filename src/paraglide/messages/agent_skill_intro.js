/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_IntroInputs */

const zh_agent_skill_intro = /** @type {(inputs: Agent_Skill_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按安装、配对、试一试三步接入 AI agent，API Key 不会出现在对话记录中。`)
};

const en_agent_skill_intro = /** @type {(inputs: Agent_Skill_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect an AI agent in three steps: install, pair, try. The API Key never appears in the conversation.`)
};

/**
* | output |
* | --- |
* | "Connect an AI agent in three steps: install, pair, try. The API Key never appears in the conversation." |
*
* @param {Agent_Skill_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_intro = /** @type {((inputs?: Agent_Skill_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_intro(inputs)
	return zh_agent_skill_intro(inputs)
});