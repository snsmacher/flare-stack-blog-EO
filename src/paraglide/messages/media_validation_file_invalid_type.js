/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Validation_File_Invalid_TypeInputs */

const zh_media_validation_file_invalid_type = /** @type {(inputs: Media_Validation_File_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅支持上传图片文件`)
};

const en_media_validation_file_invalid_type = /** @type {(inputs: Media_Validation_File_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only image files are supported`)
};

/**
* | output |
* | --- |
* | "Only image files are supported" |
*
* @param {Media_Validation_File_Invalid_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_validation_file_invalid_type = /** @type {((inputs?: Media_Validation_File_Invalid_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Validation_File_Invalid_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_validation_file_invalid_type(inputs)
	return zh_media_validation_file_invalid_type(inputs)
});