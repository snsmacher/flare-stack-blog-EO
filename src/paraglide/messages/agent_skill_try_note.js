/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_NoteInputs */

const zh_agent_skill_try_note = /** @type {(inputs: Agent_Skill_Try_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`agent 的修改先保存为草稿，发布后才会出现在已发布页面；分类与标签的新建、改名、删除即时生效。`)
};

const en_agent_skill_try_note = /** @type {(inputs: Agent_Skill_Try_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent changes are saved as drafts first and appear on published pages only after publishing. Creating, renaming and deleting categories and tags take effect immediately.`)
};

/**
* | output |
* | --- |
* | "Agent changes are saved as drafts first and appear on published pages only after publishing. Creating, renaming and deleting categories and tags take effect ..." |
*
* @param {Agent_Skill_Try_NoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_note = /** @type {((inputs?: Agent_Skill_Try_NoteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_NoteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_note(inputs)
	return zh_agent_skill_try_note(inputs)
});