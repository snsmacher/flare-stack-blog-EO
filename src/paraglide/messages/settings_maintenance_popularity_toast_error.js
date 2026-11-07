/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_Toast_ErrorInputs */

const zh_settings_maintenance_popularity_toast_error = /** @type {(inputs: Settings_Maintenance_Popularity_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章热度同步失败`)
};

const en_settings_maintenance_popularity_toast_error = /** @type {(inputs: Settings_Maintenance_Popularity_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post popularity sync failed`)
};

/**
* | output |
* | --- |
* | "Post popularity sync failed" |
*
* @param {Settings_Maintenance_Popularity_Toast_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_toast_error = /** @type {((inputs?: Settings_Maintenance_Popularity_Toast_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_Toast_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_toast_error(inputs)
	return zh_settings_maintenance_popularity_toast_error(inputs)
});