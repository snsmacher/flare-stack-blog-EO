/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Status_ExpiredInputs */

const zh_settings_maintenance_popularity_status_expired = /** @type {(inputs: Settings_Maintenance_Popularity_Status_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已过期`)
};

const en_settings_maintenance_popularity_status_expired = /** @type {(inputs: Settings_Maintenance_Popularity_Status_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expired`)
};

/**
* | output |
* | --- |
* | "Expired" |
*
* @param {Settings_Maintenance_Popularity_Status_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_status_expired = /** @type {((inputs?: Settings_Maintenance_Popularity_Status_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Status_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_status_expired(inputs)
	return zh_settings_maintenance_popularity_status_expired(inputs)
});