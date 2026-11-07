/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Image_UnavailableInputs */

const zh_media_image_unavailable = /** @type {(inputs: Media_Image_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法预览图片`)
};

const en_media_image_unavailable = /** @type {(inputs: Media_Image_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image preview unavailable`)
};

/**
* | output |
* | --- |
* | "Image preview unavailable" |
*
* @param {Media_Image_UnavailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_image_unavailable = /** @type {((inputs?: Media_Image_UnavailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Image_UnavailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_image_unavailable(inputs)
	return zh_media_image_unavailable(inputs)
});