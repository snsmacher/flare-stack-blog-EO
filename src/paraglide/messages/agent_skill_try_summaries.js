/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_SummariesInputs */

const zh_agent_skill_try_summaries = /** @type {(inputs: Agent_Skill_Try_SummariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为最近三篇文章补写摘要，保存为草稿`)
};

const en_agent_skill_try_summaries = /** @type {(inputs: Agent_Skill_Try_SummariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write summaries for the latest three posts and save them as drafts`)
};

/**
* | output |
* | --- |
* | "Write summaries for the latest three posts and save them as drafts" |
*
* @param {Agent_Skill_Try_SummariesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_summaries = /** @type {((inputs?: Agent_Skill_Try_SummariesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_SummariesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_summaries(inputs)
	return zh_agent_skill_try_summaries(inputs)
});