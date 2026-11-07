/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Invalid_Nav_HrefInputs */

const zh_settings_site_validation_invalid_nav_href = /** @type {(inputs: Settings_Site_Validation_Invalid_Nav_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 / 开头的站内路径或完整的 http(s) 网址`)
};

const en_settings_site_validation_invalid_nav_href = /** @type {(inputs: Settings_Site_Validation_Invalid_Nav_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a root-relative path (/...) or a valid http(s) URL`)
};

/**
* | output |
* | --- |
* | "Please enter a root-relative path (/...) or a valid http(s) URL" |
*
* @param {Settings_Site_Validation_Invalid_Nav_HrefInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_invalid_nav_href = /** @type {((inputs?: Settings_Site_Validation_Invalid_Nav_HrefInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Invalid_Nav_HrefInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_invalid_nav_href(inputs)
	return zh_settings_site_validation_invalid_nav_href(inputs)
});