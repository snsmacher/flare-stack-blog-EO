/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_CheckingInputs */

const zh_settings_maintenance_version_checking = /** @type {(inputs: Settings_Maintenance_Version_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查中...`)
};

const en_settings_maintenance_version_checking = /** @type {(inputs: Settings_Maintenance_Version_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking...`)
};

/**
* | output |
* | --- |
* | "Checking..." |
*
* @param {Settings_Maintenance_Version_CheckingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_checking = /** @type {((inputs?: Settings_Maintenance_Version_CheckingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_CheckingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_checking(inputs)
	return zh_settings_maintenance_version_checking(inputs)
});