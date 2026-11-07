/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Agents_Never_UsedInputs */

const zh_agent_skill_agents_never_used = /** @type {(inputs: Agent_Skill_Agents_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未使用`)
};

const en_agent_skill_agents_never_used = /** @type {(inputs: Agent_Skill_Agents_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not used yet`)
};

/**
* | output |
* | --- |
* | "Not used yet" |
*
* @param {Agent_Skill_Agents_Never_UsedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_agents_never_used = /** @type {((inputs?: Agent_Skill_Agents_Never_UsedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Agents_Never_UsedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_agents_never_used(inputs)
	return zh_agent_skill_agents_never_used(inputs)
});