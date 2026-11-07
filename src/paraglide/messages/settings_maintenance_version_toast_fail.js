/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Toast_FailInputs */

const zh_settings_maintenance_version_toast_fail = /** @type {(inputs: Settings_Maintenance_Version_Toast_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查失败`)
};

const en_settings_maintenance_version_toast_fail = /** @type {(inputs: Settings_Maintenance_Version_Toast_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check Failed`)
};

/**
* | output |
* | --- |
* | "Check Failed" |
*
* @param {Settings_Maintenance_Version_Toast_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_fail = /** @type {((inputs?: Settings_Maintenance_Version_Toast_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_fail(inputs)
	return zh_settings_maintenance_version_toast_fail(inputs)
});