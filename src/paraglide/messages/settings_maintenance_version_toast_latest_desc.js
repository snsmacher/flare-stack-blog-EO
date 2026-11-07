/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Maintenance_Version_Toast_Latest_DescInputs */

const zh_settings_maintenance_version_toast_latest_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_Latest_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`当前版本 v${i?.version} 为最新版本。`)
};

const en_settings_maintenance_version_toast_latest_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_Latest_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Current version v${i?.version} is the latest.`)
};

/**
* | output |
* | --- |
* | "Current version v{version} is the latest." |
*
* @param {Settings_Maintenance_Version_Toast_Latest_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_latest_desc = /** @type {((inputs: Settings_Maintenance_Version_Toast_Latest_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_Latest_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_latest_desc(inputs)
	return zh_settings_maintenance_version_toast_latest_desc(inputs)
});