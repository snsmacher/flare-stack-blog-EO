/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_GenerateInputs */

const zh_agent_skill_pair_generate = /** @type {(inputs: Agent_Skill_Pair_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成配对码`)
};

const en_agent_skill_pair_generate = /** @type {(inputs: Agent_Skill_Pair_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate pairing code`)
};

/**
* | output |
* | --- |
* | "Generate pairing code" |
*
* @param {Agent_Skill_Pair_GenerateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_generate = /** @type {((inputs?: Agent_Skill_Pair_GenerateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_GenerateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_generate(inputs)
	return zh_agent_skill_pair_generate(inputs)
});