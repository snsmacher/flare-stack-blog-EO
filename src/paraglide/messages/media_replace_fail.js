/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Replace_FailInputs */

const zh_media_replace_fail = /** @type {(inputs: Media_Replace_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`替换失败`)
};

const en_media_replace_fail = /** @type {(inputs: Media_Replace_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace failed`)
};

/**
* | output |
* | --- |
* | "Replace failed" |
*
* @param {Media_Replace_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_replace_fail = /** @type {((inputs?: Media_Replace_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Replace_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_replace_fail(inputs)
	return zh_media_replace_fail(inputs)
});