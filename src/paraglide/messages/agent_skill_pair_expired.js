/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_ExpiredInputs */

const zh_agent_skill_pair_expired = /** @type {(inputs: Agent_Skill_Pair_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对码已过期`)
};

const en_agent_skill_pair_expired = /** @type {(inputs: Agent_Skill_Pair_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The pairing code has expired`)
};

/**
* | output |
* | --- |
* | "The pairing code has expired" |
*
* @param {Agent_Skill_Pair_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_expired = /** @type {((inputs?: Agent_Skill_Pair_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_expired(inputs)
	return zh_agent_skill_pair_expired(inputs)
});