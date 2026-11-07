/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Add_Row_BeforeInputs */

const zh_editor_table_add_row_before = /** @type {(inputs: Editor_Table_Add_Row_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在上方插入行`)
};

const en_editor_table_add_row_before = /** @type {(inputs: Editor_Table_Add_Row_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert row above`)
};

/**
* | output |
* | --- |
* | "Insert row above" |
*
* @param {Editor_Table_Add_Row_BeforeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_add_row_before = /** @type {((inputs?: Editor_Table_Add_Row_BeforeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Add_Row_BeforeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_add_row_before(inputs)
	return zh_editor_table_add_row_before(inputs)
});