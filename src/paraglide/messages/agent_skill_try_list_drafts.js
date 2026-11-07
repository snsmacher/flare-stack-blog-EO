/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_List_DraftsInputs */

const zh_agent_skill_try_list_drafts = /** @type {(inputs: Agent_Skill_Try_List_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列出最近的草稿`)
};

const en_agent_skill_try_list_drafts = /** @type {(inputs: Agent_Skill_Try_List_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List the latest drafts`)
};

/**
* | output |
* | --- |
* | "List the latest drafts" |
*
* @param {Agent_Skill_Try_List_DraftsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_list_drafts = /** @type {((inputs?: Agent_Skill_Try_List_DraftsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_List_DraftsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_list_drafts(inputs)
	return zh_agent_skill_try_list_drafts(inputs)
});