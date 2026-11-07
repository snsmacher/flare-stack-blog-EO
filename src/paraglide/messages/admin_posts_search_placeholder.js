/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Search_PlaceholderInputs */

const zh_admin_posts_search_placeholder = /** @type {(inputs: Admin_Posts_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索文章`)
};

const en_admin_posts_search_placeholder = /** @type {(inputs: Admin_Posts_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search posts`)
};

/**
* | output |
* | --- |
* | "Search posts" |
*
* @param {Admin_Posts_Search_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_search_placeholder = /** @type {((inputs?: Admin_Posts_Search_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Search_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_search_placeholder(inputs)
	return zh_admin_posts_search_placeholder(inputs)
});