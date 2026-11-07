/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ duration: NonNullable<unknown>, indexed: NonNullable<unknown> }} Settings_Maintenance_Search_Toast_SuccessInputs */

const zh_settings_maintenance_search_toast_success = /** @type {(inputs: Settings_Maintenance_Search_Toast_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`索引重建完成 (耗时 ${i?.duration}ms, 共 ${i?.indexed} 条数据)`)
};

const en_settings_maintenance_search_toast_success = /** @type {(inputs: Settings_Maintenance_Search_Toast_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Index rebuild complete (took ${i?.duration}ms, ${i?.indexed} records)`)
};

/**
* | output |
* | --- |
* | "Index rebuild complete (took {duration}ms, {indexed} records)" |
*
* @param {Settings_Maintenance_Search_Toast_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_toast_success = /** @type {((inputs: Settings_Maintenance_Search_Toast_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_Toast_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_toast_success(inputs)
	return zh_settings_maintenance_search_toast_success(inputs)
});