/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Col_DimensionsInputs */

const zh_media_col_dimensions = /** @type {(inputs: Media_Col_DimensionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尺寸`)
};

const en_media_col_dimensions = /** @type {(inputs: Media_Col_DimensionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensions`)
};

/**
* | output |
* | --- |
* | "Dimensions" |
*
* @param {Media_Col_DimensionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_col_dimensions = /** @type {((inputs?: Media_Col_DimensionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Col_DimensionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_col_dimensions(inputs)
	return zh_media_col_dimensions(inputs)
});