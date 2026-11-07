/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_UrlInputs */

const zh_editor_image_url = /** @type {(inputs: Editor_Image_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片链接`)
};

const en_editor_image_url = /** @type {(inputs: Editor_Image_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image URL`)
};

/**
* | output |
* | --- |
* | "Image URL" |
*
* @param {Editor_Image_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_url = /** @type {((inputs?: Editor_Image_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_url(inputs)
	return zh_editor_image_url(inputs)
});