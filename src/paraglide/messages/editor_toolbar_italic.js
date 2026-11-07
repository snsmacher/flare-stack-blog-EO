/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_ItalicInputs */

const zh_editor_toolbar_italic = /** @type {(inputs: Editor_Toolbar_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`斜体`)
};

const en_editor_toolbar_italic = /** @type {(inputs: Editor_Toolbar_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Italic`)
};

/**
* | output |
* | --- |
* | "Italic" |
*
* @param {Editor_Toolbar_ItalicInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_italic = /** @type {((inputs?: Editor_Toolbar_ItalicInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_ItalicInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_italic(inputs)
	return zh_editor_toolbar_italic(inputs)
});