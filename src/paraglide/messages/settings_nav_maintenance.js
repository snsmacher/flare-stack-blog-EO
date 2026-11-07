/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_MaintenanceInputs */

const zh_settings_nav_maintenance = /** @type {(inputs: Settings_Nav_MaintenanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`维护`)
};

const en_settings_nav_maintenance = /** @type {(inputs: Settings_Nav_MaintenanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maintenance`)
};

/**
* | output |
* | --- |
* | "Maintenance" |
*
* @param {Settings_Nav_MaintenanceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_maintenance = /** @type {((inputs?: Settings_Nav_MaintenanceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_MaintenanceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_maintenance(inputs)
	return zh_settings_nav_maintenance(inputs)
});