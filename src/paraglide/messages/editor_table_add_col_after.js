/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Add_Col_AfterInputs */

const zh_editor_table_add_col_after = /** @type {(inputs: Editor_Table_Add_Col_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在右侧插入列`)
};

const en_editor_table_add_col_after = /** @type {(inputs: Editor_Table_Add_Col_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert column right`)
};

/**
* | output |
* | --- |
* | "Insert column right" |
*
* @param {Editor_Table_Add_Col_AfterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_add_col_after = /** @type {((inputs?: Editor_Table_Add_Col_AfterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Add_Col_AfterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_add_col_after(inputs)
	return zh_editor_table_add_col_after(inputs)
});