/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_UploadInputs */

const zh_media_upload = /** @type {(inputs: Media_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const en_media_upload = /** @type {(inputs: Media_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {Media_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_upload = /** @type {((inputs?: Media_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_upload(inputs)
	return zh_media_upload(inputs)
});