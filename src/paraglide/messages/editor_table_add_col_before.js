/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Add_Col_BeforeInputs */

const zh_editor_table_add_col_before = /** @type {(inputs: Editor_Table_Add_Col_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在左侧插入列`)
};

const en_editor_table_add_col_before = /** @type {(inputs: Editor_Table_Add_Col_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert column left`)
};

/**
* | output |
* | --- |
* | "Insert column left" |
*
* @param {Editor_Table_Add_Col_BeforeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_add_col_before = /** @type {((inputs?: Editor_Table_Add_Col_BeforeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Add_Col_BeforeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_add_col_before(inputs)
	return zh_editor_table_add_col_before(inputs)
});