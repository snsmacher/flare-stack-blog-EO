/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_Code_HiddenInputs */

const zh_agent_skill_pair_code_hidden = /** @type {(inputs: Agent_Skill_Pair_Code_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对码仅在生成时显示。需要新的配对码时，请重新生成。`)
};

const en_agent_skill_pair_code_hidden = /** @type {(inputs: Agent_Skill_Pair_Code_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The pairing code is shown only when it is generated. Regenerate to get a new one.`)
};

/**
* | output |
* | --- |
* | "The pairing code is shown only when it is generated. Regenerate to get a new one." |
*
* @param {Agent_Skill_Pair_Code_HiddenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_code_hidden = /** @type {((inputs?: Agent_Skill_Pair_Code_HiddenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_Code_HiddenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_code_hidden(inputs)
	return zh_agent_skill_pair_code_hidden(inputs)
});