/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Unreferenced_EmptyInputs */

const zh_media_unreferenced_empty = /** @type {(inputs: Media_Unreferenced_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有未被文章引用的图片`)
};

const en_media_unreferenced_empty = /** @type {(inputs: Media_Unreferenced_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No images without post references`)
};

/**
* | output |
* | --- |
* | "No images without post references" |
*
* @param {Media_Unreferenced_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_unreferenced_empty = /** @type {((inputs?: Media_Unreferenced_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Unreferenced_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_unreferenced_empty(inputs)
	return zh_media_unreferenced_empty(inputs)
});