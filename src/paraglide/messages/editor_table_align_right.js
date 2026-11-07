/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Align_RightInputs */

const zh_editor_table_align_right = /** @type {(inputs: Editor_Table_Align_RightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列右对齐`)
};

const en_editor_table_align_right = /** @type {(inputs: Editor_Table_Align_RightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Align column right`)
};

/**
* | output |
* | --- |
* | "Align column right" |
*
* @param {Editor_Table_Align_RightInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_align_right = /** @type {((inputs?: Editor_Table_Align_RightInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Align_RightInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_align_right(inputs)
	return zh_editor_table_align_right(inputs)
});