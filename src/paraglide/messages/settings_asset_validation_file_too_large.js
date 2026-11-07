/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ maxSizeMb: NonNullable<unknown> }} Settings_Asset_Validation_File_Too_LargeInputs */

const zh_settings_asset_validation_file_too_large = /** @type {(inputs: Settings_Asset_Validation_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`文件大小不能超过 ${i?.maxSizeMb}MB`)
};

const en_settings_asset_validation_file_too_large = /** @type {(inputs: Settings_Asset_Validation_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`File size must be less than ${i?.maxSizeMb}MB`)
};

/**
* | output |
* | --- |
* | "File size must be less than {maxSizeMb}MB" |
*
* @param {Settings_Asset_Validation_File_Too_LargeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_validation_file_too_large = /** @type {((inputs: Settings_Asset_Validation_File_Too_LargeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Validation_File_Too_LargeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_validation_file_too_large(inputs)
	return zh_settings_asset_validation_file_too_large(inputs)
});