/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Author_PhInputs */

const zh_settings_site_field_author_ph = /** @type {(inputs: Settings_Site_Field_Author_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站长昵称 / 笔名`)
};

const en_settings_site_field_author_ph = /** @type {(inputs: Settings_Site_Field_Author_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nickname / Author`)
};

/**
* | output |
* | --- |
* | "Nickname / Author" |
*
* @param {Settings_Site_Field_Author_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_author_ph = /** @type {((inputs?: Settings_Site_Field_Author_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Author_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_author_ph(inputs)
	return zh_settings_site_field_author_ph(inputs)
});