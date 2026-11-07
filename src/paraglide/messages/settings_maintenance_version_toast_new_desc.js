/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Maintenance_Version_Toast_New_DescInputs */

const zh_settings_maintenance_version_toast_new_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_New_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} 已发布! 点击查看详情。`)
};

const en_settings_maintenance_version_toast_new_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_New_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} has been released! Click for details.`)
};

/**
* | output |
* | --- |
* | "v{version} has been released! Click for details." |
*
* @param {Settings_Maintenance_Version_Toast_New_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_new_desc = /** @type {((inputs: Settings_Maintenance_Version_Toast_New_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_New_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_new_desc(inputs)
	return zh_settings_maintenance_version_toast_new_desc(inputs)
});