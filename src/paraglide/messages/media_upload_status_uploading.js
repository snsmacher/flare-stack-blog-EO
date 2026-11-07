/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Upload_Status_UploadingInputs */

const zh_media_upload_status_uploading = /** @type {(inputs: Media_Upload_Status_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传中`)
};

const en_media_upload_status_uploading = /** @type {(inputs: Media_Upload_Status_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading`)
};

/**
* | output |
* | --- |
* | "Uploading" |
*
* @param {Media_Upload_Status_UploadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_upload_status_uploading = /** @type {((inputs?: Media_Upload_Status_UploadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Upload_Status_UploadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_upload_status_uploading(inputs)
	return zh_media_upload_status_uploading(inputs)
});