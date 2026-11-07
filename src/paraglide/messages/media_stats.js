/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, size: NonNullable<unknown> }} Media_StatsInputs */

const zh_media_stats = /** @type {(inputs: Media_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 张 · ${i?.size}`)
};

const en_media_stats = /** @type {(inputs: Media_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} · ${i?.size}`)
};

/**
* | output |
* | --- |
* | "{count} · {size}" |
*
* @param {Media_StatsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_stats = /** @type {((inputs: Media_StatsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_StatsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_stats(inputs)
	return zh_media_stats(inputs)
});