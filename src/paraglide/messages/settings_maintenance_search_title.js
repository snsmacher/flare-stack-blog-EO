/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_TitleInputs */

const zh_settings_maintenance_search_title = /** @type {(inputs: Settings_Maintenance_Search_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重建搜索索引`)
};

const en_settings_maintenance_search_title = /** @type {(inputs: Settings_Maintenance_Search_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rebuild Search Index`)
};

/**
* | output |
* | --- |
* | "Rebuild Search Index" |
*
* @param {Settings_Maintenance_Search_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_title = /** @type {((inputs?: Settings_Maintenance_Search_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_title(inputs)
	return zh_settings_maintenance_search_title(inputs)
});