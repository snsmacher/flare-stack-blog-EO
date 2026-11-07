/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_InsertInputs */

const zh_editor_formula_insert = /** @type {(inputs: Editor_Formula_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入公式`)
};

const en_editor_formula_insert = /** @type {(inputs: Editor_Formula_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert Formula`)
};

/**
* | output |
* | --- |
* | "Insert Formula" |
*
* @param {Editor_Formula_InsertInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_insert = /** @type {((inputs?: Editor_Formula_InsertInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_InsertInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_insert(inputs)
	return zh_editor_formula_insert(inputs)
});