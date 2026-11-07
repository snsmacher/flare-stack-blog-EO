/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Favicon_IcoInputs */

const zh_settings_site_field_favicon_ico = /** @type {(inputs: Settings_Site_Field_Favicon_IcoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容标签页图标 (ICO)`)
};

const en_settings_site_field_favicon_ico = /** @type {(inputs: Settings_Site_Field_Favicon_IcoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tab Icon (ICO)`)
};

/**
* | output |
* | --- |
* | "Tab Icon (ICO)" |
*
* @param {Settings_Site_Field_Favicon_IcoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_favicon_ico = /** @type {((inputs?: Settings_Site_Field_Favicon_IcoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Favicon_IcoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_favicon_ico(inputs)
	return zh_settings_site_field_favicon_ico(inputs)
});