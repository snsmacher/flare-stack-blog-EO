/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Load_FailedInputs */

const zh_agent_skill_pair_load_failed = /** @type {(inputs: Agent_Skill_Pair_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取配对状态`)
};

const en_agent_skill_pair_load_failed = /** @type {(inputs: Agent_Skill_Pair_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not read the pairing status`)
};

/**
* | output |
* | --- |
* | "Could not read the pairing status" |
*
* @param {Agent_Skill_Pair_Load_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_load_failed = /** @type {((inputs?: Agent_Skill_Pair_Load_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Load_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_load_failed(inputs)
	return zh_agent_skill_pair_load_failed(inputs)
});