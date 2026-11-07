/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_LinkInputs */

const zh_editor_toolbar_link = /** @type {(inputs: Editor_Toolbar_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入链接`)
};

const en_editor_toolbar_link = /** @type {(inputs: Editor_Toolbar_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert Link`)
};

/**
* | output |
* | --- |
* | "Insert Link" |
*
* @param {Editor_Toolbar_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_link = /** @type {((inputs?: Editor_Toolbar_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_link(inputs)
	return zh_editor_toolbar_link(inputs)
});