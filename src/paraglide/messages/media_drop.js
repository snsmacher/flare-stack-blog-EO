/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_DropInputs */

const zh_media_drop = /** @type {(inputs: Media_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`松开以上传`)
};

const en_media_drop = /** @type {(inputs: Media_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop to upload`)
};

/**
* | output |
* | --- |
* | "Drop to upload" |
*
* @param {Media_DropInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_drop = /** @type {((inputs?: Media_DropInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_DropInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_drop(inputs)
	return zh_media_drop(inputs)
});