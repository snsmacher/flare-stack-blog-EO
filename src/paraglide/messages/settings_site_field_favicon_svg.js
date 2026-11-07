/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Favicon_SvgInputs */

const zh_settings_site_field_favicon_svg = /** @type {(inputs: Settings_Site_Field_Favicon_SvgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签页图标 (SVG 矢量)`)
};

const en_settings_site_field_favicon_svg = /** @type {(inputs: Settings_Site_Field_Favicon_SvgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tab Icon (SVG)`)
};

/**
* | output |
* | --- |
* | "Tab Icon (SVG)" |
*
* @param {Settings_Site_Field_Favicon_SvgInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_favicon_svg = /** @type {((inputs?: Settings_Site_Field_Favicon_SvgInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Favicon_SvgInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_favicon_svg(inputs)
	return zh_settings_site_field_favicon_svg(inputs)
});