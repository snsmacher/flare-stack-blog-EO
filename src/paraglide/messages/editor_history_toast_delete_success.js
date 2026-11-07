/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Toast_Delete_SuccessInputs */

const zh_editor_history_toast_delete_success = /** @type {(inputs: Editor_History_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已删除此版本`)
};

const en_editor_history_toast_delete_success = /** @type {(inputs: Editor_History_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version deleted`)
};

/**
* | output |
* | --- |
* | "Version deleted" |
*
* @param {Editor_History_Toast_Delete_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_toast_delete_success = /** @type {((inputs?: Editor_History_Toast_Delete_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Toast_Delete_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_toast_delete_success(inputs)
	return zh_editor_history_toast_delete_success(inputs)
});