/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Bubble_Menu_Inline_MathInputs */

const zh_editor_bubble_menu_inline_math = /** @type {(inputs: Editor_Bubble_Menu_Inline_MathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`转为行内公式`)
};

const en_editor_bubble_menu_inline_math = /** @type {(inputs: Editor_Bubble_Menu_Inline_MathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convert to inline math`)
};

/**
* | output |
* | --- |
* | "Convert to inline math" |
*
* @param {Editor_Bubble_Menu_Inline_MathInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_bubble_menu_inline_math = /** @type {((inputs?: Editor_Bubble_Menu_Inline_MathInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Bubble_Menu_Inline_MathInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_bubble_menu_inline_math(inputs)
	return zh_editor_bubble_menu_inline_math(inputs)
});