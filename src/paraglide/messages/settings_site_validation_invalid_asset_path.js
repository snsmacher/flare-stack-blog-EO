/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Invalid_Asset_PathInputs */

const zh_settings_site_validation_invalid_asset_path = /** @type {(inputs: Settings_Site_Validation_Invalid_Asset_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 / 开头的站内资源路径`)
};

const en_settings_site_validation_invalid_asset_path = /** @type {(inputs: Settings_Site_Validation_Invalid_Asset_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a root-relative site asset path`)
};

/**
* | output |
* | --- |
* | "Please enter a root-relative site asset path" |
*
* @param {Settings_Site_Validation_Invalid_Asset_PathInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_invalid_asset_path = /** @type {((inputs?: Settings_Site_Validation_Invalid_Asset_PathInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Invalid_Asset_PathInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_invalid_asset_path(inputs)
	return zh_settings_site_validation_invalid_asset_path(inputs)
});