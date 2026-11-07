/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Toast_Delete_Success_DescInputs */

const zh_editor_history_toast_delete_success_desc = /** @type {(inputs: Editor_History_Toast_Delete_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个版本已从历史记录中移除。`)
};

const en_editor_history_toast_delete_success_desc = /** @type {(inputs: Editor_History_Toast_Delete_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version was removed from history.`)
};

/**
* | output |
* | --- |
* | "This version was removed from history." |
*
* @param {Editor_History_Toast_Delete_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_toast_delete_success_desc = /** @type {((inputs?: Editor_History_Toast_Delete_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Toast_Delete_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_toast_delete_success_desc(inputs)
	return zh_editor_history_toast_delete_success_desc(inputs)
});