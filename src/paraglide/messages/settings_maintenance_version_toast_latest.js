/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Toast_LatestInputs */

const zh_settings_maintenance_version_toast_latest = /** @type {(inputs: Settings_Maintenance_Version_Toast_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统已是最新`)
};

const en_settings_maintenance_version_toast_latest = /** @type {(inputs: Settings_Maintenance_Version_Toast_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System is Up-to-Date`)
};

/**
* | output |
* | --- |
* | "System is Up-to-Date" |
*
* @param {Settings_Maintenance_Version_Toast_LatestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_latest = /** @type {((inputs?: Settings_Maintenance_Version_Toast_LatestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_LatestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_latest(inputs)
	return zh_settings_maintenance_version_toast_latest(inputs)
});