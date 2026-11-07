/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Badge_UnusedInputs */

const zh_media_badge_unused = /** @type {(inputs: Media_Badge_UnusedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未使用`)
};

const en_media_badge_unused = /** @type {(inputs: Media_Badge_UnusedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unused`)
};

/**
* | output |
* | --- |
* | "Unused" |
*
* @param {Media_Badge_UnusedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_badge_unused = /** @type {((inputs?: Media_Badge_UnusedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Badge_UnusedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_badge_unused(inputs)
	return zh_media_badge_unused(inputs)
});