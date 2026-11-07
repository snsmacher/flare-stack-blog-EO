/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_SiteInputs */

const zh_settings_nav_site = /** @type {(inputs: Settings_Nav_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点`)
};

const en_settings_nav_site = /** @type {(inputs: Settings_Nav_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

/**
* | output |
* | --- |
* | "Site" |
*
* @param {Settings_Nav_SiteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_site = /** @type {((inputs?: Settings_Nav_SiteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_SiteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_site(inputs)
	return zh_settings_nav_site(inputs)
});