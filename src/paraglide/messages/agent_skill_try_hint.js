/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_HintInputs */

const zh_agent_skill_try_hint = /** @type {(inputs: Agent_Skill_Try_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接入完成后，可向 agent 发出以下指令。`)
};

const en_agent_skill_try_hint = /** @type {(inputs: Agent_Skill_Try_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once connected, give the agent any of these instructions.`)
};

/**
* | output |
* | --- |
* | "Once connected, give the agent any of these instructions." |
*
* @param {Agent_Skill_Try_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_hint = /** @type {((inputs?: Agent_Skill_Try_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_hint(inputs)
	return zh_agent_skill_try_hint(inputs)
});