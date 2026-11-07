/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_AnotherInputs */

const zh_agent_skill_pair_another = /** @type {(inputs: Agent_Skill_Pair_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对其他 agent`)
};

const en_agent_skill_pair_another = /** @type {(inputs: Agent_Skill_Pair_AnotherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pair another agent`)
};

/**
* | output |
* | --- |
* | "Pair another agent" |
*
* @param {Agent_Skill_Pair_AnotherInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_another = /** @type {((inputs?: Agent_Skill_Pair_AnotherInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_AnotherInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_another(inputs)
	return zh_agent_skill_pair_another(inputs)
});