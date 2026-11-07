/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Replace_SuccessInputs */

const zh_media_replace_success = /** @type {(inputs: Media_Replace_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已替换`)
};

const en_media_replace_success = /** @type {(inputs: Media_Replace_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replaced`)
};

/**
* | output |
* | --- |
* | "Replaced" |
*
* @param {Media_Replace_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_replace_success = /** @type {((inputs?: Media_Replace_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Replace_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_replace_success(inputs)
	return zh_media_replace_success(inputs)
});