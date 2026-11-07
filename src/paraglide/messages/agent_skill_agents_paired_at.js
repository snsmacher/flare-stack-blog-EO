/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Agents_Paired_AtInputs */

const zh_agent_skill_agents_paired_at = /** @type {(inputs: Agent_Skill_Agents_Paired_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对时间`)
};

const en_agent_skill_agents_paired_at = /** @type {(inputs: Agent_Skill_Agents_Paired_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paired`)
};

/**
* | output |
* | --- |
* | "Paired" |
*
* @param {Agent_Skill_Agents_Paired_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_agents_paired_at = /** @type {((inputs?: Agent_Skill_Agents_Paired_AtInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Agents_Paired_AtInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_agents_paired_at(inputs)
	return zh_agent_skill_agents_paired_at(inputs)
});