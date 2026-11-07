/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Delete_ColInputs */

const zh_editor_table_delete_col = /** @type {(inputs: Editor_Table_Delete_ColInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除列`)
};

const en_editor_table_delete_col = /** @type {(inputs: Editor_Table_Delete_ColInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete column`)
};

/**
* | output |
* | --- |
* | "Delete column" |
*
* @param {Editor_Table_Delete_ColInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_delete_col = /** @type {((inputs?: Editor_Table_Delete_ColInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Delete_ColInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_delete_col(inputs)
	return zh_editor_table_delete_col(inputs)
});