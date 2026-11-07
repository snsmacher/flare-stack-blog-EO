/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Sync_BtnInputs */

const zh_settings_maintenance_popularity_sync_btn = /** @type {(inputs: Settings_Maintenance_Popularity_Sync_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即同步`)
};

const en_settings_maintenance_popularity_sync_btn = /** @type {(inputs: Settings_Maintenance_Popularity_Sync_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync now`)
};

/**
* | output |
* | --- |
* | "Sync now" |
*
* @param {Settings_Maintenance_Popularity_Sync_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_sync_btn = /** @type {((inputs?: Settings_Maintenance_Popularity_Sync_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Sync_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_sync_btn(inputs)
	return zh_settings_maintenance_popularity_sync_btn(inputs)
});