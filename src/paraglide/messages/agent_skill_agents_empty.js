/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Agents_EmptyInputs */

const zh_agent_skill_agents_empty = /** @type {(inputs: Agent_Skill_Agents_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无通过配对接入的 agent`)
};

const en_agent_skill_agents_empty = /** @type {(inputs: Agent_Skill_Agents_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No agents connected by pairing yet`)
};

/**
* | output |
* | --- |
* | "No agents connected by pairing yet" |
*
* @param {Agent_Skill_Agents_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_agents_empty = /** @type {((inputs?: Agent_Skill_Agents_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Agents_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_agents_empty(inputs)
	return zh_agent_skill_agents_empty(inputs)
});