/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Image_ErrorInputs */

const zh_post_image_error = /** @type {(inputs: Post_Image_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片加载失败`)
};

const en_post_image_error = /** @type {(inputs: Post_Image_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image could not be loaded`)
};

/**
* | output |
* | --- |
* | "The image could not be loaded" |
*
* @param {Post_Image_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_image_error = /** @type {((inputs?: Post_Image_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Image_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_image_error(inputs)
	return zh_post_image_error(inputs)
});