/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Favicon_96Inputs */

const zh_settings_site_field_favicon_96 = /** @type {(inputs: Settings_Site_Field_Favicon_96Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`桌面高清图标 (96×96)`)
};

const en_settings_site_field_favicon_96 = /** @type {(inputs: Settings_Site_Field_Favicon_96Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desktop Icon (96×96)`)
};

/**
* | output |
* | --- |
* | "Desktop Icon (96×96)" |
*
* @param {Settings_Site_Field_Favicon_96Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_favicon_96 = /** @type {((inputs?: Settings_Site_Field_Favicon_96Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Favicon_96Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_favicon_96(inputs)
	return zh_settings_site_field_favicon_96(inputs)
});