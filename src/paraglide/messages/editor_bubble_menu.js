/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Bubble_MenuInputs */

const zh_editor_bubble_menu = /** @type {(inputs: Editor_Bubble_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文字格式`)
};

const en_editor_bubble_menu = /** @type {(inputs: Editor_Bubble_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text formatting`)
};

/**
* | output |
* | --- |
* | "Text formatting" |
*
* @param {Editor_Bubble_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_bubble_menu = /** @type {((inputs?: Editor_Bubble_MenuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Bubble_MenuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_bubble_menu(inputs)
	return zh_editor_bubble_menu(inputs)
});