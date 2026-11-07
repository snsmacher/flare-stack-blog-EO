/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_MenuInputs */

const zh_editor_slash_menu = /** @type {(inputs: Editor_Slash_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入块`)
};

const en_editor_slash_menu = /** @type {(inputs: Editor_Slash_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert block`)
};

/**
* | output |
* | --- |
* | "Insert block" |
*
* @param {Editor_Slash_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_menu = /** @type {((inputs?: Editor_Slash_MenuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_MenuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_menu(inputs)
	return zh_editor_slash_menu(inputs)
});