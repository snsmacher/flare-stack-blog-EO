/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Validation_Path_InvalidInputs */

const zh_settings_asset_validation_path_invalid = /** @type {(inputs: Settings_Asset_Validation_Path_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源路径必须以 favicon/、social/ 或 themes/fuwari/ 开头`)
};

const en_settings_asset_validation_path_invalid = /** @type {(inputs: Settings_Asset_Validation_Path_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asset path must start with favicon/, social/, or themes/fuwari/`)
};

/**
* | output |
* | --- |
* | "Asset path must start with favicon/, social/, or themes/fuwari/" |
*
* @param {Settings_Asset_Validation_Path_InvalidInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_validation_path_invalid = /** @type {((inputs?: Settings_Asset_Validation_Path_InvalidInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Validation_Path_InvalidInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_validation_path_invalid(inputs)
	return zh_settings_asset_validation_path_invalid(inputs)
});