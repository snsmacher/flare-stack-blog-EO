/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Toast_NewInputs */

const zh_settings_maintenance_version_toast_new = /** @type {(inputs: Settings_Maintenance_Version_Toast_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发现新版本`)
};

const en_settings_maintenance_version_toast_new = /** @type {(inputs: Settings_Maintenance_Version_Toast_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Version Available`)
};

/**
* | output |
* | --- |
* | "New Version Available" |
*
* @param {Settings_Maintenance_Version_Toast_NewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_toast_new = /** @type {((inputs?: Settings_Maintenance_Version_Toast_NewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Toast_NewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_toast_new(inputs)
	return zh_settings_maintenance_version_toast_new(inputs)
});