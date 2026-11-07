/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Cache_Confirm_BtnInputs */

const zh_settings_maintenance_cache_confirm_btn = /** @type {(inputs: Settings_Maintenance_Cache_Confirm_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即重置`)
};

const en_settings_maintenance_cache_confirm_btn = /** @type {(inputs: Settings_Maintenance_Cache_Confirm_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset Now`)
};

/**
* | output |
* | --- |
* | "Reset Now" |
*
* @param {Settings_Maintenance_Cache_Confirm_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_cache_confirm_btn = /** @type {((inputs?: Settings_Maintenance_Cache_Confirm_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Cache_Confirm_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_cache_confirm_btn(inputs)
	return zh_settings_maintenance_cache_confirm_btn(inputs)
});