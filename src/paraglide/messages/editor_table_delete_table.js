/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Delete_TableInputs */

const zh_editor_table_delete_table = /** @type {(inputs: Editor_Table_Delete_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除表格`)
};

const en_editor_table_delete_table = /** @type {(inputs: Editor_Table_Delete_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete table`)
};

/**
* | output |
* | --- |
* | "Delete table" |
*
* @param {Editor_Table_Delete_TableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_delete_table = /** @type {((inputs?: Editor_Table_Delete_TableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Delete_TableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_delete_table(inputs)
	return zh_editor_table_delete_table(inputs)
});