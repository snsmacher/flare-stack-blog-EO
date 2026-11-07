/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_Href_PhInputs */

const zh_settings_site_nav_href_ph = /** @type {(inputs: Settings_Site_Nav_Href_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/about 或 https://...`)
};

const en_settings_site_nav_href_ph = /** @type {(inputs: Settings_Site_Nav_Href_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/about or https://...`)
};

/**
* | output |
* | --- |
* | "/about or https://..." |
*
* @param {Settings_Site_Nav_Href_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_href_ph = /** @type {((inputs?: Settings_Site_Nav_Href_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_Href_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_href_ph(inputs)
	return zh_settings_site_nav_href_ph(inputs)
});