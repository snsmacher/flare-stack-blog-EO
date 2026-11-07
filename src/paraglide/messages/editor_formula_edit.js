/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_EditInputs */

const zh_editor_formula_edit = /** @type {(inputs: Editor_Formula_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑公式`)
};

const en_editor_formula_edit = /** @type {(inputs: Editor_Formula_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Formula`)
};

/**
* | output |
* | --- |
* | "Edit Formula" |
*
* @param {Editor_Formula_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_edit = /** @type {((inputs?: Editor_Formula_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_edit(inputs)
	return zh_editor_formula_edit(inputs)
});