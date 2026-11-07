/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_CodeInputs */

const zh_editor_toolbar_code = /** @type {(inputs: Editor_Toolbar_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行内代码`)
};

const en_editor_toolbar_code = /** @type {(inputs: Editor_Toolbar_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inline Code`)
};

/**
* | output |
* | --- |
* | "Inline Code" |
*
* @param {Editor_Toolbar_CodeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_code = /** @type {((inputs?: Editor_Toolbar_CodeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_CodeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_code(inputs)
	return zh_editor_toolbar_code(inputs)
});