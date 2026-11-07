/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_Toast_LoadingInputs */

const zh_settings_maintenance_search_toast_loading = /** @type {(inputs: Settings_Maintenance_Search_Toast_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在重新映射索引...`)
};

const en_settings_maintenance_search_toast_loading = /** @type {(inputs: Settings_Maintenance_Search_Toast_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remapping index...`)
};

/**
* | output |
* | --- |
* | "Remapping index..." |
*
* @param {Settings_Maintenance_Search_Toast_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_toast_loading = /** @type {((inputs?: Settings_Maintenance_Search_Toast_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_Toast_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_toast_loading(inputs)
	return zh_settings_maintenance_search_toast_loading(inputs)
});