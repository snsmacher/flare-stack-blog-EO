/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_Desc_ShortInputs */

const zh_settings_maintenance_search_desc_short = /** @type {(inputs: Settings_Maintenance_Search_Desc_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索结果缺少文章或内容过时时使用。`)
};

const en_settings_maintenance_search_desc_short = /** @type {(inputs: Settings_Maintenance_Search_Desc_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use when search results are missing posts or show outdated content.`)
};

/**
* | output |
* | --- |
* | "Use when search results are missing posts or show outdated content." |
*
* @param {Settings_Maintenance_Search_Desc_ShortInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_desc_short = /** @type {((inputs?: Settings_Maintenance_Search_Desc_ShortInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_Desc_ShortInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_desc_short(inputs)
	return zh_settings_maintenance_search_desc_short(inputs)
});