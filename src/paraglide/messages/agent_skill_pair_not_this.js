/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Not_ThisInputs */

const zh_agent_skill_pair_not_this = /** @type {(inputs: Agent_Skill_Pair_Not_ThisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是此 agent？撤销`)
};

const en_agent_skill_pair_not_this = /** @type {(inputs: Agent_Skill_Pair_Not_ThisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not this agent? Revoke`)
};

/**
* | output |
* | --- |
* | "Not this agent? Revoke" |
*
* @param {Agent_Skill_Pair_Not_ThisInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_not_this = /** @type {((inputs?: Agent_Skill_Pair_Not_ThisInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Not_ThisInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_not_this(inputs)
	return zh_agent_skill_pair_not_this(inputs)
});