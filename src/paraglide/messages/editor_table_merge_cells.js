/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Merge_CellsInputs */

const zh_editor_table_merge_cells = /** @type {(inputs: Editor_Table_Merge_CellsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合并单元格`)
};

const en_editor_table_merge_cells = /** @type {(inputs: Editor_Table_Merge_CellsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merge cells`)
};

/**
* | output |
* | --- |
* | "Merge cells" |
*
* @param {Editor_Table_Merge_CellsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_merge_cells = /** @type {((inputs?: Editor_Table_Merge_CellsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Merge_CellsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_merge_cells(inputs)
	return zh_editor_table_merge_cells(inputs)
});