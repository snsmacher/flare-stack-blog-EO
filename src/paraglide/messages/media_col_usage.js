/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Col_UsageInputs */

const zh_media_col_usage = /** @type {(inputs: Media_Col_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引用`)
};

const en_media_col_usage = /** @type {(inputs: Media_Col_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage`)
};

/**
* | output |
* | --- |
* | "Usage" |
*
* @param {Media_Col_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_col_usage = /** @type {((inputs?: Media_Col_UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Col_UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_col_usage(inputs)
	return zh_media_col_usage(inputs)
});