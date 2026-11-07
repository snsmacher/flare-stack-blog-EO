/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_PlaceholderInputs */

const zh_editor_formula_placeholder = /** @type {(inputs: Editor_Formula_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 LaTeX，如 x^2 + y^2 = z^2`)
};

const en_editor_formula_placeholder = /** @type {(inputs: Editor_Formula_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter LaTeX, e.g. x^2 + y^2 = z^2`)
};

/**
* | output |
* | --- |
* | "Enter LaTeX, e.g. x^2 + y^2 = z^2" |
*
* @param {Editor_Formula_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_placeholder = /** @type {((inputs?: Editor_Formula_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_placeholder(inputs)
	return zh_editor_formula_placeholder(inputs)
});