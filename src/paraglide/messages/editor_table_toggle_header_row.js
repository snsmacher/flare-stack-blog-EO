/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Toggle_Header_RowInputs */

const zh_editor_table_toggle_header_row = /** @type {(inputs: Editor_Table_Toggle_Header_RowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题行`)
};

const en_editor_table_toggle_header_row = /** @type {(inputs: Editor_Table_Toggle_Header_RowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Header row`)
};

/**
* | output |
* | --- |
* | "Header row" |
*
* @param {Editor_Table_Toggle_Header_RowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_toggle_header_row = /** @type {((inputs?: Editor_Table_Toggle_Header_RowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Toggle_Header_RowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_toggle_header_row(inputs)
	return zh_editor_table_toggle_header_row(inputs)
});