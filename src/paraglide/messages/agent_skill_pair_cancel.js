/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_CancelInputs */

const zh_agent_skill_pair_cancel = /** @type {(inputs: Agent_Skill_Pair_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const en_agent_skill_pair_cancel = /** @type {(inputs: Agent_Skill_Pair_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Agent_Skill_Pair_CancelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_cancel = /** @type {((inputs?: Agent_Skill_Pair_CancelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_CancelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_cancel(inputs)
	return zh_agent_skill_pair_cancel(inputs)
});