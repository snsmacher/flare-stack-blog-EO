/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_RegenerateInputs */

const zh_agent_skill_pair_regenerate = /** @type {(inputs: Agent_Skill_Pair_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成`)
};

const en_agent_skill_pair_regenerate = /** @type {(inputs: Agent_Skill_Pair_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerate`)
};

/**
* | output |
* | --- |
* | "Regenerate" |
*
* @param {Agent_Skill_Pair_RegenerateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_regenerate = /** @type {((inputs?: Agent_Skill_Pair_RegenerateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_RegenerateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_regenerate(inputs)
	return zh_agent_skill_pair_regenerate(inputs)
});