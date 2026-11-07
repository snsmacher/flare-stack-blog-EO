/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Toggle_Header_ColInputs */

const zh_editor_table_toggle_header_col = /** @type {(inputs: Editor_Table_Toggle_Header_ColInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题列`)
};

const en_editor_table_toggle_header_col = /** @type {(inputs: Editor_Table_Toggle_Header_ColInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Header column`)
};

/**
* | output |
* | --- |
* | "Header column" |
*
* @param {Editor_Table_Toggle_Header_ColInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_toggle_header_col = /** @type {((inputs?: Editor_Table_Toggle_Header_ColInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Toggle_Header_ColInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_toggle_header_col(inputs)
	return zh_editor_table_toggle_header_col(inputs)
});