/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Col_MenuInputs */

const zh_editor_table_col_menu = /** @type {(inputs: Editor_Table_Col_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列`)
};

const en_editor_table_col_menu = /** @type {(inputs: Editor_Table_Col_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Column`)
};

/**
* | output |
* | --- |
* | "Column" |
*
* @param {Editor_Table_Col_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_col_menu = /** @type {((inputs?: Editor_Table_Col_MenuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Col_MenuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_col_menu(inputs)
	return zh_editor_table_col_menu(inputs)
});