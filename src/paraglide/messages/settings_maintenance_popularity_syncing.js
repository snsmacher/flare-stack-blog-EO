/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_SyncingInputs */

const zh_settings_maintenance_popularity_syncing = /** @type {(inputs: Settings_Maintenance_Popularity_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同步中...`)
};

const en_settings_maintenance_popularity_syncing = /** @type {(inputs: Settings_Maintenance_Popularity_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syncing...`)
};

/**
* | output |
* | --- |
* | "Syncing..." |
*
* @param {Settings_Maintenance_Popularity_SyncingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_syncing = /** @type {((inputs?: Settings_Maintenance_Popularity_SyncingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_SyncingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_syncing(inputs)
	return zh_settings_maintenance_popularity_syncing(inputs)
});