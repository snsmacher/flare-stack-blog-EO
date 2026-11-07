/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Toast_SuccessInputs */

const zh_settings_maintenance_popularity_toast_success = /** @type {(inputs: Settings_Maintenance_Popularity_Toast_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章热度同步完成`)
};

const en_settings_maintenance_popularity_toast_success = /** @type {(inputs: Settings_Maintenance_Popularity_Toast_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post popularity sync completed`)
};

/**
* | output |
* | --- |
* | "Post popularity sync completed" |
*
* @param {Settings_Maintenance_Popularity_Toast_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_toast_success = /** @type {((inputs?: Settings_Maintenance_Popularity_Toast_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Toast_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_toast_success(inputs)
	return zh_settings_maintenance_popularity_toast_success(inputs)
});