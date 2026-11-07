/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_LoadingInputs */

const zh_agent_skill_pair_loading = /** @type {(inputs: Agent_Skill_Pair_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取配对状态`)
};

const en_agent_skill_pair_loading = /** @type {(inputs: Agent_Skill_Pair_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading pairing status`)
};

/**
* | output |
* | --- |
* | "Reading pairing status" |
*
* @param {Agent_Skill_Pair_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_loading = /** @type {((inputs?: Agent_Skill_Pair_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_loading(inputs)
	return zh_agent_skill_pair_loading(inputs)
});