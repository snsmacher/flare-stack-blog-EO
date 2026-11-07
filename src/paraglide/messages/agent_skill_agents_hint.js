/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Agents_HintInputs */

const zh_agent_skill_agents_hint = /** @type {(inputs: Agent_Skill_Agents_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过配对接入的 agent。删除后，对应的 API Key 立即失效。`)
};

const en_agent_skill_agents_hint = /** @type {(inputs: Agent_Skill_Agents_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agents connected by pairing. Deleting one invalidates its API Key at once.`)
};

/**
* | output |
* | --- |
* | "Agents connected by pairing. Deleting one invalidates its API Key at once." |
*
* @param {Agent_Skill_Agents_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_agents_hint = /** @type {((inputs?: Agent_Skill_Agents_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Agents_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_agents_hint(inputs)
	return zh_agent_skill_agents_hint(inputs)
});