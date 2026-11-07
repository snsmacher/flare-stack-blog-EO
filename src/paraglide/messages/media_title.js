/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_TitleInputs */

const zh_media_title = /** @type {(inputs: Media_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体库`)
};

const en_media_title = /** @type {(inputs: Media_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

/**
* | output |
* | --- |
* | "Media" |
*
* @param {Media_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_title = /** @type {((inputs?: Media_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_title(inputs)
	return zh_media_title(inputs)
});