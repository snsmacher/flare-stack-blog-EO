/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Generate_FailedInputs */

const zh_agent_skill_pair_generate_failed = /** @type {(inputs: Agent_Skill_Pair_Generate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成失败`)
};

const en_agent_skill_pair_generate_failed = /** @type {(inputs: Agent_Skill_Pair_Generate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not generate a code`)
};

/**
* | output |
* | --- |
* | "Could not generate a code" |
*
* @param {Agent_Skill_Pair_Generate_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_generate_failed = /** @type {((inputs?: Agent_Skill_Pair_Generate_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Generate_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_generate_failed(inputs)
	return zh_agent_skill_pair_generate_failed(inputs)
});