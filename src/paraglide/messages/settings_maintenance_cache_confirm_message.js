/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Cache_Confirm_MessageInputs */

const zh_settings_maintenance_cache_confirm_message = /** @type {(inputs: Settings_Maintenance_Cache_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该操作将清除 CDN 及 KV 中的所有缓存数据。执行后前台加载速度可能会暂时变慢。是否确认执行？`)
};

const en_settings_maintenance_cache_confirm_message = /** @type {(inputs: Settings_Maintenance_Cache_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This operation will clear all cached data in both the CDN and KV. Front-end loading speed may temporarily decrease after execution. Confirm execution?`)
};

/**
* | output |
* | --- |
* | "This operation will clear all cached data in both the CDN and KV. Front-end loading speed may temporarily decrease after execution. Confirm execution?" |
*
* @param {Settings_Maintenance_Cache_Confirm_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_cache_confirm_message = /** @type {((inputs?: Settings_Maintenance_Cache_Confirm_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Cache_Confirm_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_cache_confirm_message(inputs)
	return zh_settings_maintenance_cache_confirm_message(inputs)
});