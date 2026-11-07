/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Delete_MessageInputs */

const zh_editor_history_delete_message = /** @type {(inputs: Editor_History_Delete_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除后无法找回。正在编辑的内容和已发布的文章都不受影响。`)
};

const en_editor_history_delete_message = /** @type {(inputs: Editor_History_Delete_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This cannot be undone. Your current edits and the published post are not affected.`)
};

/**
* | output |
* | --- |
* | "This cannot be undone. Your current edits and the published post are not affected." |
*
* @param {Editor_History_Delete_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_delete_message = /** @type {((inputs?: Editor_History_Delete_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Delete_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_delete_message(inputs)
	return zh_editor_history_delete_message(inputs)
});