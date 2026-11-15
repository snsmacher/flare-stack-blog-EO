/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Nav_Href_RequiredInputs */

const zh_settings_site_validation_nav_href_required = /** @type {(inputs: Settings_Site_Validation_Nav_Href_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请填写链接地址`)
};

const en_settings_site_validation_nav_href_required = /** @type {(inputs: Settings_Site_Validation_Nav_Href_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a link address`)
};

/**
* | output |
* | --- |
* | "Please enter a link address" |
*
* @param {Settings_Site_Validation_Nav_Href_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_nav_href_required = /** @type {((inputs?: Settings_Site_Validation_Nav_Href_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Nav_Href_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_nav_href_required(inputs)
	return zh_settings_site_validation_nav_href_required(inputs)
});