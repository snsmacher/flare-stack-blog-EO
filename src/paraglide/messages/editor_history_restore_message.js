/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_MessageInputs */

const zh_editor_history_restore_message = /** @type {(inputs: Editor_History_Restore_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前草稿会先保存为一个新版本，再恢复为此版本，分类和标签也会一并恢复。仅影响草稿，已发布页面在重新发布后才会更新。`)
};

const en_editor_history_restore_message = /** @type {(inputs: Editor_History_Restore_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your current edits are saved as a version first, then replaced with this one, including its category and tags. Only the draft changes; the public page updates when you publish.`)
};

/**
* | output |
* | --- |
* | "Your current edits are saved as a version first, then replaced with this one, including its category and tags. Only the draft changes; the public page update..." |
*
* @param {Editor_History_Restore_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_message = /** @type {((inputs?: Editor_History_Restore_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_message(inputs)
	return zh_editor_history_restore_message(inputs)
});