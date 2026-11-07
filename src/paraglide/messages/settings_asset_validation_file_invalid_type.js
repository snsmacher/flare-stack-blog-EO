/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Validation_File_Invalid_TypeInputs */

const zh_settings_asset_validation_file_invalid_type = /** @type {(inputs: Settings_Asset_Validation_File_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅支持图片格式（JPEG、PNG、WebP、GIF、SVG、ICO）`)
};

const en_settings_asset_validation_file_invalid_type = /** @type {(inputs: Settings_Asset_Validation_File_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only image files (JPEG, PNG, WebP, GIF, SVG, ICO) are supported`)
};

/**
* | output |
* | --- |
* | "Only image files (JPEG, PNG, WebP, GIF, SVG, ICO) are supported" |
*
* @param {Settings_Asset_Validation_File_Invalid_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_validation_file_invalid_type = /** @type {((inputs?: Settings_Asset_Validation_File_Invalid_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Validation_File_Invalid_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_validation_file_invalid_type(inputs)
	return zh_settings_asset_validation_file_invalid_type(inputs)
});