/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Image_PrevInputs */

const zh_post_image_prev = /** @type {(inputs: Post_Image_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一张`)
};

const en_post_image_prev = /** @type {(inputs: Post_Image_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Post_Image_PrevInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_image_prev = /** @type {((inputs?: Post_Image_PrevInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Image_PrevInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_image_prev(inputs)
	return zh_post_image_prev(inputs)
});