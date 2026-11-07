/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Toast_Restore_SuccessInputs */

const zh_editor_history_toast_restore_success = /** @type {(inputs: Editor_History_Toast_Restore_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已恢复此版本`)
};

const en_editor_history_toast_restore_success = /** @type {(inputs: Editor_History_Toast_Restore_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version restored`)
};

/**
* | output |
* | --- |
* | "Version restored" |
*
* @param {Editor_History_Toast_Restore_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_toast_restore_success = /** @type {((inputs?: Editor_History_Toast_Restore_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Toast_Restore_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_toast_restore_success(inputs)
	return zh_editor_history_toast_restore_success(inputs)
});