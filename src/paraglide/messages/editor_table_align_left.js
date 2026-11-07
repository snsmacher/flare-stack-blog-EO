/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Align_LeftInputs */

const zh_editor_table_align_left = /** @type {(inputs: Editor_Table_Align_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列左对齐`)
};

const en_editor_table_align_left = /** @type {(inputs: Editor_Table_Align_LeftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Align column left`)
};

/**
* | output |
* | --- |
* | "Align column left" |
*
* @param {Editor_Table_Align_LeftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_align_left = /** @type {((inputs?: Editor_Table_Align_LeftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Align_LeftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_align_left(inputs)
	return zh_editor_table_align_left(inputs)
});