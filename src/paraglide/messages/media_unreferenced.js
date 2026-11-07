/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_UnreferencedInputs */

const zh_media_unreferenced = /** @type {(inputs: Media_UnreferencedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未引用`)
};

const en_media_unreferenced = /** @type {(inputs: Media_UnreferencedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unreferenced`)
};

/**
* | output |
* | --- |
* | "Unreferenced" |
*
* @param {Media_UnreferencedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_unreferenced = /** @type {((inputs?: Media_UnreferencedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_UnreferencedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_unreferenced(inputs)
	return zh_media_unreferenced(inputs)
});