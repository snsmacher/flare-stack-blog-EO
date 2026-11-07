/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Cache_TitleInputs */

const zh_settings_maintenance_cache_title = /** @type {(inputs: Settings_Maintenance_Cache_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置全站缓存`)
};

const en_settings_maintenance_cache_title = /** @type {(inputs: Settings_Maintenance_Cache_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset All Cache`)
};

/**
* | output |
* | --- |
* | "Reset All Cache" |
*
* @param {Settings_Maintenance_Cache_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_cache_title = /** @type {((inputs?: Settings_Maintenance_Cache_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Cache_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_cache_title(inputs)
	return zh_settings_maintenance_cache_title(inputs)
});