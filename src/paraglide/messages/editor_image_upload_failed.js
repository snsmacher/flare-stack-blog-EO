/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Upload_FailedInputs */

const zh_editor_image_upload_failed = /** @type {(inputs: Editor_Image_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传失败`)
};

const en_editor_image_upload_failed = /** @type {(inputs: Editor_Image_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload failed`)
};

/**
* | output |
* | --- |
* | "Upload failed" |
*
* @param {Editor_Image_Upload_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_upload_failed = /** @type {((inputs?: Editor_Image_Upload_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Upload_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_upload_failed(inputs)
	return zh_editor_image_upload_failed(inputs)
});