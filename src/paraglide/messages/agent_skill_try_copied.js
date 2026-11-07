/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_CopiedInputs */

const zh_agent_skill_try_copied = /** @type {(inputs: Agent_Skill_Try_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制指令`)
};

const en_agent_skill_try_copied = /** @type {(inputs: Agent_Skill_Try_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instruction copied`)
};

/**
* | output |
* | --- |
* | "Instruction copied" |
*
* @param {Agent_Skill_Try_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_copied = /** @type {((inputs?: Agent_Skill_Try_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_copied(inputs)
	return zh_agent_skill_try_copied(inputs)
});