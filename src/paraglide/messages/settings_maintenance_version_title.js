/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_TitleInputs */

const zh_settings_maintenance_version_title = /** @type {(inputs: Settings_Maintenance_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本检查`)
};

const en_settings_maintenance_version_title = /** @type {(inputs: Settings_Maintenance_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version Check`)
};

/**
* | output |
* | --- |
* | "Version Check" |
*
* @param {Settings_Maintenance_Version_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_title = /** @type {((inputs?: Settings_Maintenance_Version_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_title(inputs)
	return zh_settings_maintenance_version_title(inputs)
});