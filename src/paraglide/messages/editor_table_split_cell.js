/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Split_CellInputs */

const zh_editor_table_split_cell = /** @type {(inputs: Editor_Table_Split_CellInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拆分单元格`)
};

const en_editor_table_split_cell = /** @type {(inputs: Editor_Table_Split_CellInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Split cell`)
};

/**
* | output |
* | --- |
* | "Split cell" |
*
* @param {Editor_Table_Split_CellInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_split_cell = /** @type {((inputs?: Editor_Table_Split_CellInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Split_CellInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_split_cell(inputs)
	return zh_editor_table_split_cell(inputs)
});