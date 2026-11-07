/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_AddInputs */

const zh_settings_site_nav_add = /** @type {(inputs: Settings_Site_Nav_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加导航项`)
};

const en_settings_site_nav_add = /** @type {(inputs: Settings_Site_Nav_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Link`)
};

/**
* | output |
* | --- |
* | "Add Link" |
*
* @param {Settings_Site_Nav_AddInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_add = /** @type {((inputs?: Settings_Site_Nav_AddInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_AddInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_add(inputs)
	return zh_settings_site_nav_add(inputs)
});