/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Status_PendingInputs */

const zh_settings_maintenance_popularity_status_pending = /** @type {(inputs: Settings_Maintenance_Popularity_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待首次同步`)
};

const en_settings_maintenance_popularity_status_pending = /** @type {(inputs: Settings_Maintenance_Popularity_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for first sync`)
};

/**
* | output |
* | --- |
* | "Waiting for first sync" |
*
* @param {Settings_Maintenance_Popularity_Status_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_status_pending = /** @type {((inputs?: Settings_Maintenance_Popularity_Status_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Status_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_status_pending(inputs)
	return zh_settings_maintenance_popularity_status_pending(inputs)
});