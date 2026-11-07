/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Search_Confirm_MessageInputs */

const zh_settings_maintenance_search_confirm_message = /** @type {(inputs: Settings_Maintenance_Search_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该操作将全量扫描所有数据库日志并重新建立搜索映射。在执行过程中，前端搜索功能可能出现短暂不可用或延迟。是否确认执行？`)
};

const en_settings_maintenance_search_confirm_message = /** @type {(inputs: Settings_Maintenance_Search_Confirm_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This operation will fully scan all database logs and rebuild search mappings. Front-end search functionality may be briefly unavailable or delayed during this process. Confirm execution?`)
};

/**
* | output |
* | --- |
* | "This operation will fully scan all database logs and rebuild search mappings. Front-end search functionality may be briefly unavailable or delayed during thi..." |
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