/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Revoke_TitleInputs */

const zh_agent_skill_pair_revoke_title = /** @type {(inputs: Agent_Skill_Pair_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销 agent 访问`)
};

const en_agent_skill_pair_revoke_title = /** @type {(inputs: Agent_Skill_Pair_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke agent access`)
};

/**
* | output |
* | --- |
* | "Revoke agent access" |
*
* @param {Agent_Skill_Pair_Revoke_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_revoke_title = /** @type {((inputs?: Agent_Skill_Pair_Revoke_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Revoke_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_revoke_title(inputs)
	return zh_agent_skill_pair_revoke_title(inputs)
});