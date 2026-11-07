/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Table_Align_CenterInputs */

const zh_editor_table_align_center = /** @type {(inputs: Editor_Table_Align_CenterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列居中`)
};

const en_editor_table_align_center = /** @type {(inputs: Editor_Table_Align_CenterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Center column`)
};

/**
* | output |
* | --- |
* | "Center column" |
*
* @param {Editor_Table_Align_CenterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_table_align_center = /** @type {((inputs?: Editor_Table_Align_CenterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Table_Align_CenterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_table_align_center(inputs)
	return zh_editor_table_align_center(inputs)
});