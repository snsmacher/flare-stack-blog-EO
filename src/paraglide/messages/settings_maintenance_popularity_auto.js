/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_AutoInputs */

const zh_settings_maintenance_popularity_auto = /** @type {(inputs: Settings_Maintenance_Popularity_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每 24 小时会自动同步一次。`)
};

const en_settings_maintenance_popularity_auto = /** @type {(inputs: Settings_Maintenance_Popularity_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syncs automatically every 24 hours.`)
};

/**
* | output |
* | --- |
* | "Syncs automatically every 24 hours." |
*
* @param {Settings_Maintenance_Popularity_AutoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_auto = /** @type {((inputs?: Settings_Maintenance_Popularity_AutoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_AutoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_auto(inputs)
	return zh_settings_maintenance_popularity_auto(inputs)
});