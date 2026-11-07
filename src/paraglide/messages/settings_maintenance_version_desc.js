/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Maintenance_Version_DescInputs */

const zh_settings_maintenance_version_desc = /** @type {(inputs: Settings_Maintenance_Version_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`当前运行版本为 v${i?.version}。`)
};

const en_settings_maintenance_version_desc = /** @type {(inputs: Settings_Maintenance_Version_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Current running version is v${i?.version}.`)
};

/**
* | output |
* | --- |
* | "Current running version is v{version}." |
*
* @param {Settings_Maintenance_Version_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_desc = /** @type {((inputs: Settings_Maintenance_Version_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_desc(inputs)
	return zh_settings_maintenance_version_desc(inputs)
});