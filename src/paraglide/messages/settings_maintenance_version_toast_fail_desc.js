/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Toast_Fail_DescInputs */

const zh_settings_maintenance_version_toast_fail_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_Fail_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法连接到 GitHub API，请稍后重试。`)
};

const en_settings_maintenance_version_toast_fail_desc = /** @type {(inputs: Settings_Maintenance_Version_Toast_Fail_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to connect to the GitHub API, please try again later.`)
};

/**
* | output |
* | --- |
* | "Unable to connect to the GitHub API, please try again later." |
*
* @param {Settings_Maintenance_Version_Toast_Fail_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_fail_desc = /** @type {((inputs?: Settings_Maintenance_Version_Toast_Fail_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_Fail_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_fail_desc(inputs)
	return zh_settings_maintenance_version_toast_fail_desc(inputs)
});