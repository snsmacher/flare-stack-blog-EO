/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Description_PhInputs */

const zh_settings_site_field_description_ph = /** @type {(inputs: Settings_Site_Field_Description_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一句话介绍你自己或这个博客...`)
};

const en_settings_site_field_description_ph = /** @type {(inputs: Settings_Site_Field_Description_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A short bio or site intro...`)
};

/**
* | output |
* | --- |
* | "A short bio or site intro..." |
*
* @param {Settings_Site_Field_Description_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_description_ph = /** @type {((inputs?: Settings_Site_Field_Description_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Description_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_description_ph(inputs)
	return zh_settings_site_field_description_ph(inputs)
});