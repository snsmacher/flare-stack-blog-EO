/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_Confirm_TitleInputs */

const zh_settings_maintenance_search_confirm_title = /** @type {(inputs: Settings_Maintenance_Search_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认索引重建`)
};

const en_settings_maintenance_search_confirm_title = /** @type {(inputs: Settings_Maintenance_Search_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm Index Rebuild`)
};

/**
* | output |
* | --- |
* | "Confirm Index Rebuild" |
*
* @param {Settings_Maintenance_Search_Confirm_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_confirm_title = /** @type {((inputs?: Settings_Maintenance_Search_Confirm_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_Confirm_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_confirm_title(inputs)
	return zh_settings_maintenance_search_confirm_title(inputs)
});