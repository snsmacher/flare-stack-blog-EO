/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_TitleInputs */

const zh_settings_site_field_title = /** @type {(inputs: Settings_Site_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点标题`)
};

const en_settings_site_field_title = /** @type {(inputs: Settings_Site_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site Title`)
};

/**
* | output |
* | --- |
* | "Site Title" |
*
* @param {Settings_Site_Field_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_title = /** @type {((inputs?: Settings_Site_Field_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_title(inputs)
	return zh_settings_site_field_title(inputs)
});