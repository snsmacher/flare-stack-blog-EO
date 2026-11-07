/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Revoke_ConfirmInputs */

const zh_agent_skill_pair_revoke_confirm = /** @type {(inputs: Agent_Skill_Pair_Revoke_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const en_agent_skill_pair_revoke_confirm = /** @type {(inputs: Agent_Skill_Pair_Revoke_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke`)
};

/**
* | output |
* | --- |
* | "Revoke" |
*
* @param {Agent_Skill_Pair_Revoke_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_revoke_confirm = /** @type {((inputs?: Agent_Skill_Pair_Revoke_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Revoke_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_revoke_confirm(inputs)
	return zh_agent_skill_pair_revoke_confirm(inputs)
});