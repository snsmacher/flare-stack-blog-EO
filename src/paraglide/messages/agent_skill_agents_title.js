/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Agents_TitleInputs */

const zh_agent_skill_agents_title = /** @type {(inputs: Agent_Skill_Agents_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已接入的 agent`)
};

const en_agent_skill_agents_title = /** @type {(inputs: Agent_Skill_Agents_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connected agents`)
};

/**
* | output |
* | --- |
* | "Connected agents" |
*
* @param {Agent_Skill_Agents_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_agents_title = /** @type {((inputs?: Agent_Skill_Agents_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Agents_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_agents_title(inputs)
	return zh_agent_skill_agents_title(inputs)
});