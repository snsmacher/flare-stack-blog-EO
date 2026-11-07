/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Title_PhInputs */

const zh_settings_site_field_title_ph = /** @type {(inputs: Settings_Site_Field_Title_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客名称（如：我的个人博客）`)
};

const en_settings_site_field_title_ph = /** @type {(inputs: Settings_Site_Field_Title_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog title (e.g. My Personal Blog)`)
};

/**
* | output |
* | --- |
* | "Blog title (e.g. My Personal Blog)" |
*
* @param {Settings_Site_Field_Title_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_title_ph = /** @type {((inputs?: Settings_Site_Field_Title_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Title_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_title_ph(inputs)
	return zh_settings_site_field_title_ph(inputs)
});