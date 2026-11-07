/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Copy_FailedInputs */

const zh_media_copy_failed = /** @type {(inputs: Media_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败`)
};

const en_media_copy_failed = /** @type {(inputs: Media_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't copy`)
};

/**
* | output |
* | --- |
* | "Couldn't copy" |
*
* @param {Media_Copy_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_copy_failed = /** @type {((inputs?: Media_Copy_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Copy_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_copy_failed(inputs)
	return zh_media_copy_failed(inputs)
});