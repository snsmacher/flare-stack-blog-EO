/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_RemoveInputs */

const zh_settings_site_nav_remove = /** @type {(inputs: Settings_Site_Nav_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除此项`)
};

const en_settings_site_nav_remove = /** @type {(inputs: Settings_Site_Nav_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove item`)
};

/**
* | output |
* | --- |
* | "Remove item" |
*
* @param {Settings_Site_Nav_RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_remove = /** @type {((inputs?: Settings_Site_Nav_RemoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_RemoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_remove(inputs)
	return zh_settings_site_nav_remove(inputs)
});