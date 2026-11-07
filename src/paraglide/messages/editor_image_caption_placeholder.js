/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Caption_PlaceholderInputs */

const zh_editor_image_caption_placeholder = /** @type {(inputs: Editor_Image_Caption_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片说明...`)
};

const en_editor_image_caption_placeholder = /** @type {(inputs: Editor_Image_Caption_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a caption...`)
};

/**
* | output |
* | --- |
* | "Add a caption..." |
*
* @param {Editor_Image_Caption_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_caption_placeholder = /** @type {((inputs?: Editor_Image_Caption_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Caption_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_caption_placeholder(inputs)
	return zh_editor_image_caption_placeholder(inputs)
});