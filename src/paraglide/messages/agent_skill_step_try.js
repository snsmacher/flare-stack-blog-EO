/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Step_TryInputs */

const zh_agent_skill_step_try = /** @type {(inputs: Agent_Skill_Step_TryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试一试`)
};

const en_agent_skill_step_try = /** @type {(inputs: Agent_Skill_Step_TryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try it`)
};

/**
* | output |
* | --- |
* | "Try it" |
*
* @param {Agent_Skill_Step_TryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_step_try = /** @type {((inputs?: Agent_Skill_Step_TryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Step_TryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_step_try(inputs)
	return zh_agent_skill_step_try(inputs)
});