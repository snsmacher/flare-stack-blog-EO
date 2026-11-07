/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Image_ZoomInputs */

const zh_post_image_zoom = /** @type {(inputs: Post_Image_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缩放`)
};

const en_post_image_zoom = /** @type {(inputs: Post_Image_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

/**
* | output |
* | --- |
* | "Zoom" |
*
* @param {Post_Image_ZoomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_image_zoom = /** @type {((inputs?: Post_Image_ZoomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Image_ZoomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_image_zoom(inputs)
	return zh_post_image_zoom(inputs)
});