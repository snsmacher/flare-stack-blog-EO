/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Image_NextInputs */

const zh_post_image_next = /** @type {(inputs: Post_Image_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一张`)
};

const en_post_image_next = /** @type {(inputs: Post_Image_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Post_Image_NextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_image_next = /** @type {((inputs?: Post_Image_NextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Image_NextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_image_next(inputs)
	return zh_post_image_next(inputs)
});