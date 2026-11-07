/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Status_Save_ErrorInputs */

const zh_editor_status_save_error = /** @type {(inputs: Editor_Status_Save_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存失败`)
};

const en_editor_status_save_error = /** @type {(inputs: Editor_Status_Save_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save failed`)
};

/**
* | output |
* | --- |
* | "Save failed" |
*
* @param {Editor_Status_Save_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_save_error = /** @type {((inputs?: Editor_Status_Save_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_Save_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_save_error(inputs)
	return zh_editor_status_save_error(inputs)
});