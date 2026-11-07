/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Badge_CoverInputs */

const zh_media_badge_cover = /** @type {(inputs: Media_Badge_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const en_media_badge_cover = /** @type {(inputs: Media_Badge_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Media_Badge_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_badge_cover = /** @type {((inputs?: Media_Badge_CoverInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Badge_CoverInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_badge_cover(inputs)
	return zh_media_badge_cover(inputs)
});