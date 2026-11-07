/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_InlineInputs */

const zh_editor_formula_inline = /** @type {(inputs: Editor_Formula_InlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行内`)
};

const en_editor_formula_inline = /** @type {(inputs: Editor_Formula_InlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inline`)
};

/**
* | output |
* | --- |
* | "Inline" |
*
* @param {Editor_Formula_InlineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_inline = /** @type {((inputs?: Editor_Formula_InlineInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_InlineInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_inline(inputs)
	return zh_editor_formula_inline(inputs)
});