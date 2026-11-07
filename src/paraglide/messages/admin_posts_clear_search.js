/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Clear_SearchInputs */

const zh_admin_posts_clear_search = /** @type {(inputs: Admin_Posts_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除搜索`)
};

const en_admin_posts_clear_search = /** @type {(inputs: Admin_Posts_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Admin_Posts_Clear_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_clear_search = /** @type {((inputs?: Admin_Posts_Clear_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Clear_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_clear_search(inputs)
	return zh_admin_posts_clear_search(inputs)
});