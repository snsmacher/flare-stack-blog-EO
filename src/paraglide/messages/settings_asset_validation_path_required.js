/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Validation_Path_RequiredInputs */

const zh_settings_asset_validation_path_required = /** @type {(inputs: Settings_Asset_Validation_Path_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源路径不能为空`)
};

const en_settings_asset_validation_path_required = /** @type {(inputs: Settings_Asset_Validation_Path_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asset path is required`)
};

/**
* | output |
* | --- |
* | "Asset path is required" |
*
* @param {Settings_Asset_Validation_Path_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_validation_path_required = /** @type {((inputs?: Settings_Asset_Validation_Path_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Validation_Path_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_validation_path_required(inputs)
	return zh_settings_asset_validation_path_required(inputs)
});