/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Validation_File_RequiredInputs */

const zh_settings_asset_validation_file_required = /** @type {(inputs: Settings_Asset_Validation_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择要上传的文件`)
};

const en_settings_asset_validation_file_required = /** @type {(inputs: Settings_Asset_Validation_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please select a file to upload`)
};

/**
* | output |
* | --- |
* | "Please select a file to upload" |
*
* @param {Settings_Asset_Validation_File_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_validation_file_required = /** @type {((inputs?: Settings_Asset_Validation_File_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Validation_File_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_validation_file_required(inputs)
	return zh_settings_asset_validation_file_required(inputs)
});