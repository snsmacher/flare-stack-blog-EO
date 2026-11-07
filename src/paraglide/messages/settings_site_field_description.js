/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_DescriptionInputs */

const zh_settings_site_field_description = /** @type {(inputs: Settings_Site_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const en_settings_site_field_description = /** @type {(inputs: Settings_Site_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Settings_Site_Field_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_description = /** @type {((inputs?: Settings_Site_Field_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_description(inputs)
	return zh_settings_site_field_description(inputs)
});