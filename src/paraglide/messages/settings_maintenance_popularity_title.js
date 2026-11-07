/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Popularity_TitleInputs */

const zh_settings_maintenance_popularity_title = /** @type {(inputs: Settings_Maintenance_Popularity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章热度同步`)
};

const en_settings_maintenance_popularity_title = /** @type {(inputs: Settings_Maintenance_Popularity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post Popularity Sync`)
};

/**
* | output |
* | --- |
* | "Post Popularity Sync" |
*
* @param {Settings_Maintenance_Popularity_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_popularity_title = /** @type {((inputs?: Settings_Maintenance_Popularity_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Popularity_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_popularity_title(inputs)
	return zh_settings_maintenance_popularity_title(inputs)
});