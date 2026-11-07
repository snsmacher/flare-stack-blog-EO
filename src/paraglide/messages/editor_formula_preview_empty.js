/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_Preview_EmptyInputs */

const zh_editor_formula_preview_empty = /** @type {(inputs: Editor_Formula_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 LaTeX 查看预览`)
};

const en_editor_formula_preview_empty = /** @type {(inputs: Editor_Formula_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter LaTeX to preview`)
};

/**
* | output |
* | --- |
* | "Enter LaTeX to preview" |
*
* @param {Editor_Formula_Preview_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_preview_empty = /** @type {((inputs?: Editor_Formula_Preview_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_Preview_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_preview_empty(inputs)
	return zh_editor_formula_preview_empty(inputs)
});