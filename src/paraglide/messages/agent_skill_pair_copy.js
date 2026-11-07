/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_CopyInputs */

const zh_agent_skill_pair_copy = /** @type {(inputs: Agent_Skill_Pair_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制这段话`)
};

const en_agent_skill_pair_copy = /** @type {(inputs: Agent_Skill_Pair_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy this sentence`)
};

/**
* | output |
* | --- |
* | "Copy this sentence" |
*
* @param {Agent_Skill_Pair_CopyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_copy = /** @type {((inputs?: Agent_Skill_Pair_CopyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_CopyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_copy(inputs)
	return zh_agent_skill_pair_copy(inputs)
});