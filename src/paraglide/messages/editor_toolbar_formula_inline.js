/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_Formula_InlineInputs */

const zh_editor_toolbar_formula_inline = /** @type {(inputs: Editor_Toolbar_Formula_InlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行内公式`)
};

const en_editor_toolbar_formula_inline = /** @type {(inputs: Editor_Toolbar_Formula_InlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inline Math`)
};

/**
* | output |
* | --- |
* | "Inline Math" |
*
* @param {Editor_Toolbar_Formula_InlineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_formula_inline = /** @type {((inputs?: Editor_Toolbar_Formula_InlineInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_Formula_InlineInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_formula_inline(inputs)
	return zh_editor_toolbar_formula_inline(inputs)
});