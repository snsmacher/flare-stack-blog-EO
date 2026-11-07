/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Add_Row_AfterInputs */

const zh_editor_table_add_row_after = /** @type {(inputs: Editor_Table_Add_Row_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在下方插入行`)
};

const en_editor_table_add_row_after = /** @type {(inputs: Editor_Table_Add_Row_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert row below`)
};

/**
* | output |
* | --- |
* | "Insert row below" |
*
* @param {Editor_Table_Add_Row_AfterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_add_row_after = /** @type {((inputs?: Editor_Table_Add_Row_AfterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Add_Row_AfterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_add_row_after(inputs)
	return zh_editor_table_add_row_after(inputs)
});