/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ cols: NonNullable<unknown>, rows: NonNullable<unknown> }} Editor_Toolbar_Table_SizeInputs */

const zh_editor_toolbar_table_size = /** @type {(inputs: Editor_Toolbar_Table_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.cols} 列 × ${i?.rows} 行`)
};

const en_editor_toolbar_table_size = /** @type {(inputs: Editor_Toolbar_Table_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.cols} columns × ${i?.rows} rows`)
};

/**
* | output |
* | --- |
* | "{cols} columns × {rows} rows" |
*
* @param {Editor_Toolbar_Table_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_table_size = /** @type {((inputs: Editor_Toolbar_Table_SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_Table_SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_table_size(inputs)
	return zh_editor_toolbar_table_size(inputs)
});