/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_TitleInputs */

const zh_agent_skill_title = /** @type {(inputs: Agent_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

const en_agent_skill_title = /** @type {(inputs: Agent_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

/**
* | output |
* | --- |
* | "Agent Skill" |
*
* @param {Agent_Skill_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_title = /** @type {((inputs?: Agent_Skill_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_title(inputs)
	return zh_agent_skill_title(inputs)
});