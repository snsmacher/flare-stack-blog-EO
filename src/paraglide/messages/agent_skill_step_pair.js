/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Step_PairInputs */

const zh_agent_skill_step_pair = /** @type {(inputs: Agent_Skill_Step_PairInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对`)
};

const en_agent_skill_step_pair = /** @type {(inputs: Agent_Skill_Step_PairInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pair`)
};

/**
* | output |
* | --- |
* | "Pair" |
*
* @param {Agent_Skill_Step_PairInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_step_pair = /** @type {((inputs?: Agent_Skill_Step_PairInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Step_PairInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_step_pair(inputs)
	return zh_agent_skill_step_pair(inputs)
});