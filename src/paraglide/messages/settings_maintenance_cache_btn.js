/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Cache_BtnInputs */

const zh_settings_maintenance_cache_btn = /** @type {(inputs: Settings_Maintenance_Cache_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置缓存`)
};

const en_settings_maintenance_cache_btn = /** @type {(inputs: Settings_Maintenance_Cache_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset Cache`)
};

/**
* | output |
* | --- |
* | "Reset Cache" |
*
* @param {Settings_Maintenance_Cache_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_cache_btn = /** @type {((inputs?: Settings_Maintenance_Cache_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Cache_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_cache_btn(inputs)
	return zh_settings_maintenance_cache_btn(inputs)
});