/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_StrikeInputs */

const zh_editor_toolbar_strike = /** @type {(inputs: Editor_Toolbar_StrikeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除线`)
};

const en_editor_toolbar_strike = /** @type {(inputs: Editor_Toolbar_StrikeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strikethrough`)
};

/**
* | output |
* | --- |
* | "Strikethrough" |
*
* @param {Editor_Toolbar_StrikeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_strike = /** @type {((inputs?: Editor_Toolbar_StrikeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_StrikeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_strike(inputs)
	return zh_editor_toolbar_strike(inputs)
});