/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_CopiedInputs */

const zh_media_copied = /** @type {(inputs: Media_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制链接`)
};

const en_media_copied = /** @type {(inputs: Media_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copied`)
};

/**
* | output |
* | --- |
* | "Link copied" |
*
* @param {Media_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_copied = /** @type {((inputs?: Media_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_copied(inputs)
	return zh_media_copied(inputs)
});