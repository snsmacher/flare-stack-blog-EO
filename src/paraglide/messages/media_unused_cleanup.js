/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Unused_CleanupInputs */

const zh_media_unused_cleanup = /** @type {(inputs: Media_Unused_CleanupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清理未引用图片`)
};

const en_media_unused_cleanup = /** @type {(inputs: Media_Unused_CleanupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove unreferenced images`)
};

/**
* | output |
* | --- |
* | "Remove unreferenced images" |
*
* @param {Media_Unused_CleanupInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_unused_cleanup = /** @type {((inputs?: Media_Unused_CleanupInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Unused_CleanupInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_unused_cleanup(inputs)
	return zh_media_unused_cleanup(inputs)
});