/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Check_BtnInputs */

const zh_settings_maintenance_version_check_btn = /** @type {(inputs: Settings_Maintenance_Version_Check_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查更新`)
};

const en_settings_maintenance_version_check_btn = /** @type {(inputs: Settings_Maintenance_Version_Check_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check for Updates`)
};

/**
* | output |
* | --- |
* | "Check for Updates" |
*
* @param {Settings_Maintenance_Version_Check_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_check_btn = /** @type {((inputs?: Settings_Maintenance_Version_Check_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Check_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_check_btn(inputs)
	return zh_settings_maintenance_version_check_btn(inputs)
});