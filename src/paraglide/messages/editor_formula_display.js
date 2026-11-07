/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_DisplayInputs */

const zh_editor_formula_display = /** @type {(inputs: Editor_Formula_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示方式`)
};

const en_editor_formula_display = /** @type {(inputs: Editor_Formula_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display as`)
};

/**
* | output |
* | --- |
* | "Display as" |
*
* @param {Editor_Formula_DisplayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_display = /** @type {((inputs?: Editor_Formula_DisplayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_DisplayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_display(inputs)
	return zh_editor_formula_display(inputs)
});