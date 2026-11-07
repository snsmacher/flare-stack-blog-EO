/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Bubble_Menu_LinkInputs */

const zh_editor_bubble_menu_link = /** @type {(inputs: Editor_Bubble_Menu_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const en_editor_bubble_menu_link = /** @type {(inputs: Editor_Bubble_Menu_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Editor_Bubble_Menu_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_bubble_menu_link = /** @type {((inputs?: Editor_Bubble_Menu_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Bubble_Menu_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_bubble_menu_link(inputs)
	return zh_editor_bubble_menu_link(inputs)
});