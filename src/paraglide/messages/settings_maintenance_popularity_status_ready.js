/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Status_ReadyInputs */

const zh_settings_maintenance_popularity_status_ready = /** @type {(inputs: Settings_Maintenance_Popularity_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const en_settings_maintenance_popularity_status_ready = /** @type {(inputs: Settings_Maintenance_Popularity_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready`)
};

/**
* | output |
* | --- |
* | "Ready" |
*
* @param {Settings_Maintenance_Popularity_Status_ReadyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_status_ready = /** @type {((inputs?: Settings_Maintenance_Popularity_Status_ReadyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Status_ReadyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_status_ready(inputs)
	return zh_settings_maintenance_popularity_status_ready(inputs)
});