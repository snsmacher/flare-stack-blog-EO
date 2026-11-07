/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Row_MenuInputs */

const zh_editor_table_row_menu = /** @type {(inputs: Editor_Table_Row_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行`)
};

const en_editor_table_row_menu = /** @type {(inputs: Editor_Table_Row_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Row`)
};

/**
* | output |
* | --- |
* | "Row" |
*
* @param {Editor_Table_Row_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_row_menu = /** @type {((inputs?: Editor_Table_Row_MenuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Row_MenuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_row_menu(inputs)
	return zh_editor_table_row_menu(inputs)
});