/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_EmptyInputs */

const zh_media_empty = /** @type {(inputs: Media_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无图片`)
};

const en_media_empty = /** @type {(inputs: Media_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No images yet`)
};

/**
* | output |
* | --- |
* | "No images yet" |
*
* @param {Media_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_empty = /** @type {((inputs?: Media_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_empty(inputs)
	return zh_media_empty(inputs)
});