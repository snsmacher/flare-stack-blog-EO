/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_NameInputs */

const zh_settings_site_nav_name = /** @type {(inputs: Settings_Site_Nav_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`菜单名称`)
};

const en_settings_site_nav_name = /** @type {(inputs: Settings_Site_Nav_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label`)
};

/**
* | output |
* | --- |
* | "Label" |
*
* @param {Settings_Site_Nav_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_name = /** @type {((inputs?: Settings_Site_Nav_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_name(inputs)
	return zh_settings_site_nav_name(inputs)
});