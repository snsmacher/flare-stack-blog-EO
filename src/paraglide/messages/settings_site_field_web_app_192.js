/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Web_App_192Inputs */

const zh_settings_site_field_web_app_192 = /** @type {(inputs: Settings_Site_Field_Web_App_192Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Android / PWA 图标 (192×192)`)
};

const en_settings_site_field_web_app_192 = /** @type {(inputs: Settings_Site_Field_Web_App_192Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PWA Icon (192×192)`)
};

/**
* | output |
* | --- |
* | "PWA Icon (192×192)" |
*
* @param {Settings_Site_Field_Web_App_192Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_web_app_192 = /** @type {((inputs?: Settings_Site_Field_Web_App_192Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Web_App_192Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_web_app_192(inputs)
	return zh_settings_site_field_web_app_192(inputs)
});