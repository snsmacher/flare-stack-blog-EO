/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Tab_LibraryInputs */

const zh_editor_image_tab_library = /** @type {(inputs: Editor_Image_Tab_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体库`)
};

const en_editor_image_tab_library = /** @type {(inputs: Editor_Image_Tab_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media library`)
};

/**
* | output |
* | --- |
* | "Media library" |
*
* @param {Editor_Image_Tab_LibraryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_tab_library = /** @type {((inputs?: Editor_Image_Tab_LibraryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Tab_LibraryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_tab_library(inputs)
	return zh_editor_image_tab_library(inputs)
});