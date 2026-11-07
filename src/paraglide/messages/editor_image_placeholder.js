/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_PlaceholderInputs */

const zh_editor_image_placeholder = /** @type {(inputs: Editor_Image_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加图片`)
};

const en_editor_image_placeholder = /** @type {(inputs: Editor_Image_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add an image`)
};

/**
* | output |
* | --- |
* | "Add an image" |
*
* @param {Editor_Image_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_placeholder = /** @type {((inputs?: Editor_Image_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_placeholder(inputs)
	return zh_editor_image_placeholder(inputs)
});