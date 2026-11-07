/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_UnderlineInputs */

const zh_editor_toolbar_underline = /** @type {(inputs: Editor_Toolbar_UnderlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下划线`)
};

const en_editor_toolbar_underline = /** @type {(inputs: Editor_Toolbar_UnderlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Underline`)
};

/**
* | output |
* | --- |
* | "Underline" |
*
* @param {Editor_Toolbar_UnderlineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_underline = /** @type {((inputs?: Editor_Toolbar_UnderlineInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_UnderlineInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_underline(inputs)
	return zh_editor_toolbar_underline(inputs)
});