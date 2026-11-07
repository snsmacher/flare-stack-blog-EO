/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_BoldInputs */

const zh_editor_toolbar_bold = /** @type {(inputs: Editor_Toolbar_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`粗体`)
};

const en_editor_toolbar_bold = /** @type {(inputs: Editor_Toolbar_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bold`)
};

/**
* | output |
* | --- |
* | "Bold" |
*
* @param {Editor_Toolbar_BoldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_bold = /** @type {((inputs?: Editor_Toolbar_BoldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_BoldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_bold(inputs)
	return zh_editor_toolbar_bold(inputs)
});