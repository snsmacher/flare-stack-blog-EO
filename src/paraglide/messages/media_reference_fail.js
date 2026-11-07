/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Reference_FailInputs */

const zh_media_reference_fail = /** @type {(inputs: Media_Reference_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载引用信息`)
};

const en_media_reference_fail = /** @type {(inputs: Media_Reference_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load post references`)
};

/**
* | output |
* | --- |
* | "Could not load post references" |
*
* @param {Media_Reference_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_reference_fail = /** @type {((inputs?: Media_Reference_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Reference_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_reference_fail(inputs)
	return zh_media_reference_fail(inputs)
});