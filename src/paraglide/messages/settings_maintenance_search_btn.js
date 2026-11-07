/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_BtnInputs */

const zh_settings_maintenance_search_btn = /** @type {(inputs: Settings_Maintenance_Search_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重建索引`)
};

const en_settings_maintenance_search_btn = /** @type {(inputs: Settings_Maintenance_Search_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rebuild Index`)
};

/**
* | output |
* | --- |
* | "Rebuild Index" |
*
* @param {Settings_Maintenance_Search_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_btn = /** @type {((inputs?: Settings_Maintenance_Search_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_btn(inputs)
	return zh_settings_maintenance_search_btn(inputs)
});