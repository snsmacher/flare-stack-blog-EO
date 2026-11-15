/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_Confirm_MessageInputs */

const zh_settings_maintenance_search_confirm_message = /** @type {(inputs: Settings_Maintenance_Search_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将重新读取全部已发布文章并重建搜索索引。重建期间，前台搜索可能短暂不可用或响应变慢。是否确认执行？`)
};

const en_settings_maintenance_search_confirm_message = /** @type {(inputs: Settings_Maintenance_Search_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This re-reads every published post and rebuilds the search index. Search on the public site may be briefly unavailable or slow while it runs. Continue?`)
};

/**
* | output |
* | --- |
* | "This re-reads every published post and rebuilds the search index. Search on the public site may be briefly unavailable or slow while it runs. Continue?" |
*
* @param {Settings_Maintenance_Search_Confirm_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_search_confirm_message = /** @type {((inputs?: Settings_Maintenance_Search_Confirm_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Search_Confirm_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_search_confirm_message(inputs)
	return zh_settings_maintenance_search_confirm_message(inputs)
});