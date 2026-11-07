/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_UrlInputs */

const zh_settings_site_nav_url = /** @type {(inputs: Settings_Site_Nav_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳转链接`)
};

const en_settings_site_nav_url = /** @type {(inputs: Settings_Site_Nav_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Target URL`)
};

/**
* | output |
* | --- |
* | "Target URL" |
*
* @param {Settings_Site_Nav_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_url = /** @type {((inputs?: Settings_Site_Nav_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_url(inputs)
	return zh_settings_site_nav_url(inputs)
});