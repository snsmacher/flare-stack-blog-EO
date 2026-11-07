/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Load_FailInputs */

const zh_media_load_fail = /** @type {(inputs: Media_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片加载失败`)
};

const en_media_load_fail = /** @type {(inputs: Media_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load images`)
};

/**
* | output |
* | --- |
* | "Could not load images" |
*
* @param {Media_Load_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_load_fail = /** @type {((inputs?: Media_Load_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Load_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_load_fail(inputs)
	return zh_media_load_fail(inputs)
});