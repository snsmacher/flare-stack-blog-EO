/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Tab_LinkInputs */

const zh_editor_image_tab_link = /** @type {(inputs: Editor_Image_Tab_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const en_editor_image_tab_link = /** @type {(inputs: Editor_Image_Tab_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Editor_Image_Tab_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_tab_link = /** @type {((inputs?: Editor_Image_Tab_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Tab_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_tab_link(inputs)
	return zh_editor_image_tab_link(inputs)
});