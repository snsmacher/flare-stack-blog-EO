/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Web_App_512Inputs */

const zh_settings_site_field_web_app_512 = /** @type {(inputs: Settings_Site_Field_Web_App_512Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PWA 启动图 (512×512)`)
};

const en_settings_site_field_web_app_512 = /** @type {(inputs: Settings_Site_Field_Web_App_512Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PWA Splash (512×512)`)
};

/**
* | output |
* | --- |
* | "PWA Splash (512×512)" |
*
* @param {Settings_Site_Field_Web_App_512Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_web_app_512 = /** @type {((inputs?: Settings_Site_Field_Web_App_512Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Web_App_512Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_web_app_512(inputs)
	return zh_settings_site_field_web_app_512(inputs)
});