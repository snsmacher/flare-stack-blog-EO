/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Validation_File_Too_LargeInputs */

const zh_media_validation_file_too_large = /** @type {(inputs: Media_Validation_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件大小不能超过 10MB`)
};

const en_media_validation_file_too_large = /** @type {(inputs: Media_Validation_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File size must be less than 10MB`)
};

/**
* | output |
* | --- |
* | "File size must be less than 10MB" |
*
* @param {Media_Validation_File_Too_LargeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_validation_file_too_large = /** @type {((inputs?: Media_Validation_File_Too_LargeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Validation_File_Too_LargeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_validation_file_too_large(inputs)
	return zh_media_validation_file_too_large(inputs)
});