/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Skill_Try_NotesInputs */

const zh_agent_skill_try_notes = /** @type {(inputs: Agent_Skill_Try_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把本地的 notes.md 整理成一篇草稿，图片一并上传`)
};

const en_agent_skill_try_notes = /** @type {(inputs: Agent_Skill_Try_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn the local notes.md into a draft and upload its images`)
};

/**
* | output |
* | --- |
* | "Turn the local notes.md into a draft and upload its images" |
*
* @param {Agent_Skill_Try_NotesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_skill_try_notes = /** @type {((inputs?: Agent_Skill_Try_NotesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Skill_Try_NotesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_skill_try_notes(inputs)
	return zh_agent_skill_try_notes(inputs)
});