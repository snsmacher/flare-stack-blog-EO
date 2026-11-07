/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Copy_LinkInputs */

const zh_media_copy_link = /** @type {(inputs: Media_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制链接`)
};

const en_media_copy_link = /** @type {(inputs: Media_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
};

/**
* | output |
* | --- |
* | "Copy link" |
*
* @param {Media_Copy_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_copy_link = /** @type {((inputs?: Media_Copy_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Copy_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_copy_link(inputs)
	return zh_media_copy_link(inputs)
});