/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Editor_History_Toast_Restore_Success_DescInputs */

const zh_editor_history_toast_restore_success_desc = /** @type {(inputs: Editor_History_Toast_Restore_Success_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" 已写入编辑器。`)
};

const en_editor_history_toast_restore_success_desc = /** @type {(inputs: Editor_History_Toast_Restore_Success_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" is now in the editor.`)
};

/**
* | output |
* | --- |
* | "\"{title}\" is now in the editor." |
*
* @param {Editor_History_Toast_Restore_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_toast_restore_success_desc = /** @type {((inputs: Editor_History_Toast_Restore_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Toast_Restore_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_toast_restore_success_desc(inputs)
	return zh_editor_history_toast_restore_success_desc(inputs)
});