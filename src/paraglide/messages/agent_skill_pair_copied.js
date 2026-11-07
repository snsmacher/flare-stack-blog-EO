/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_CopiedInputs */

const zh_agent_skill_pair_copied = /** @type {(inputs: Agent_Skill_Pair_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制这段话`)
};

const en_agent_skill_pair_copied = /** @type {(inputs: Agent_Skill_Pair_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentence copied`)
};

/**
* | output |
* | --- |
* | "Sentence copied" |
*
* @param {Agent_Skill_Pair_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_copied = /** @type {((inputs?: Agent_Skill_Pair_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_copied(inputs)
	return zh_agent_skill_pair_copied(inputs)
});