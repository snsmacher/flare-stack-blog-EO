/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Cache_Desc_ShortInputs */

const zh_settings_maintenance_cache_desc_short = /** @type {(inputs: Settings_Maintenance_Cache_Desc_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除 CDN 和 KV 缓存，适合在内容严重不同步时执行。`)
};

const en_settings_maintenance_cache_desc_short = /** @type {(inputs: Settings_Maintenance_Cache_Desc_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear CDN and KV cache, suitable when content is severely out of sync.`)
};

/**
* | output |
* | --- |
* | "Clear CDN and KV cache, suitable when content is severely out of sync." |
*
* @param {Settings_Maintenance_Cache_Desc_ShortInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_cache_desc_short = /** @type {((inputs?: Settings_Maintenance_Cache_Desc_ShortInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Cache_Desc_ShortInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_cache_desc_short(inputs)
	return zh_settings_maintenance_cache_desc_short(inputs)
});