/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Pair_HintInputs */

const zh_agent_skill_pair_hint = /** @type {(inputs: Agent_Skill_Pair_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成配对码后，将下方整段话交给 agent。agent 用配对码换取 API Key，配对码 10 分钟内有效，且只能使用一次。`)
};

const en_agent_skill_pair_hint = /** @type {(inputs: Agent_Skill_Pair_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`After generating a pairing code, give the whole sentence below to the agent. The agent exchanges the code for an API Key. The code is valid for 10 minutes and works once.`)
};

/**
* | output |
* | --- |
* | "After generating a pairing code, give the whole sentence below to the agent. The agent exchanges the code for an API Key. The code is valid for 10 minutes an..." |
*
* @param {Agent_Skill_Pair_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_pair_hint = /** @type {((inputs?: Agent_Skill_Pair_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Pair_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_pair_hint(inputs)
	return zh_agent_skill_pair_hint(inputs)
});