/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Toast_Restore_FailedInputs */

const zh_editor_history_toast_restore_failed = /** @type {(inputs: Editor_History_Toast_Restore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复失败`)
};

const en_editor_history_toast_restore_failed = /** @type {(inputs: Editor_History_Toast_Restore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore failed`)
};

/**
* | output |
* | --- |
* | "Restore failed" |
*
* @param {Editor_History_Toast_Restore_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_toast_restore_failed = /** @type {((inputs?: Editor_History_Toast_Restore_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Toast_Restore_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_toast_restore_failed(inputs)
	return zh_editor_history_toast_restore_failed(inputs)
});