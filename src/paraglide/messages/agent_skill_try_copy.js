/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_CopyInputs */

const zh_agent_skill_try_copy = /** @type {(inputs: Agent_Skill_Try_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制指令`)
};

const en_agent_skill_try_copy = /** @type {(inputs: Agent_Skill_Try_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy instruction`)
};

/**
* | output |
* | --- |
* | "Copy instruction" |
*
* @param {Agent_Skill_Try_CopyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_copy = /** @type {((inputs?: Agent_Skill_Try_CopyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_CopyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_copy(inputs)
	return zh_agent_skill_try_copy(inputs)
});