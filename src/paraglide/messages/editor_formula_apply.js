/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_ApplyInputs */

const zh_editor_formula_apply = /** @type {(inputs: Editor_Formula_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const en_editor_formula_apply = /** @type {(inputs: Editor_Formula_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
};

/**
* | output |
* | --- |
* | "Apply" |
*
* @param {Editor_Formula_ApplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_apply = /** @type {((inputs?: Editor_Formula_ApplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_ApplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_apply(inputs)
	return zh_editor_formula_apply(inputs)
});