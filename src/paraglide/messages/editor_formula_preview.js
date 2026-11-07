/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_PreviewInputs */

const zh_editor_formula_preview = /** @type {(inputs: Editor_Formula_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const en_editor_formula_preview = /** @type {(inputs: Editor_Formula_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Editor_Formula_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_preview = /** @type {((inputs?: Editor_Formula_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_preview(inputs)
	return zh_editor_formula_preview(inputs)
});