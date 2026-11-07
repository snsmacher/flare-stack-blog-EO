/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Upload_SuccessInputs */

const zh_media_upload_success = /** @type {(inputs: Media_Upload_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传成功`)
};

const en_media_upload_success = /** @type {(inputs: Media_Upload_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded`)
};

/**
* | output |
* | --- |
* | "Uploaded" |
*
* @param {Media_Upload_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_upload_success = /** @type {((inputs?: Media_Upload_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Upload_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_upload_success(inputs)
	return zh_media_upload_success(inputs)
});