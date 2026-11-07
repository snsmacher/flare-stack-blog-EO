/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Agent_Skill_Pair_RevokedInputs */

const zh_agent_skill_pair_revoked = /** @type {(inputs: Agent_Skill_Pair_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已撤销「${i?.name}」的访问权限`)
};

const en_agent_skill_pair_revoked = /** @type {(inputs: Agent_Skill_Pair_RevokedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Access revoked for “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Access revoked for “{name}”" |
*
* @param {Agent_Skill_Pair_RevokedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_revoked = /** @type {((inputs: Agent_Skill_Pair_RevokedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_RevokedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_revoked(inputs)
	return zh_agent_skill_pair_revoked(inputs)
});