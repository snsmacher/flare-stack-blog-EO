/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_AuthorInputs */

const zh_settings_site_field_author = /** @type {(inputs: Settings_Site_Field_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const en_settings_site_field_author = /** @type {(inputs: Settings_Site_Field_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author`)
};

/**
* | output |
* | --- |
* | "Author" |
*
* @param {Settings_Site_Field_AuthorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_author = /** @type {((inputs?: Settings_Site_Field_AuthorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_AuthorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_author(inputs)
	return zh_settings_site_field_author(inputs)
});