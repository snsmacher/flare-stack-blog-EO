/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Preview_SizeInputs */

const zh_media_preview_size = /** @type {(inputs: Media_Preview_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小`)
};

const en_media_preview_size = /** @type {(inputs: Media_Preview_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Media_Preview_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_preview_size = /** @type {((inputs?: Media_Preview_SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Preview_SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_preview_size(inputs)
	return zh_media_preview_size(inputs)
});