/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Media_Used_InInputs */

const zh_media_used_in = /** @type {(inputs: Media_Used_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`用于 ${i?.count} 篇文章`)
};

const en_media_used_in = /** @type {(inputs: Media_Used_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Used in ${i?.count} posts`)
};

/**
* | output |
* | --- |
* | "Used in {count} posts" |
*
* @param {Media_Used_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_used_in = /** @type {((inputs: Media_Used_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Used_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_used_in(inputs)
	return zh_media_used_in(inputs)
});