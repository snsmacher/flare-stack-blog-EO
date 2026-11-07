/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Col_ImageInputs */

const zh_media_col_image = /** @type {(inputs: Media_Col_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片`)
};

const en_media_col_image = /** @type {(inputs: Media_Col_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image`)
};

/**
* | output |
* | --- |
* | "Image" |
*
* @param {Media_Col_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_col_image = /** @type {((inputs?: Media_Col_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Col_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_col_image(inputs)
	return zh_media_col_image(inputs)
});