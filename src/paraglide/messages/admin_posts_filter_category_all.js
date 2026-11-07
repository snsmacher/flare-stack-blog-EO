/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_Category_AllInputs */

const zh_admin_posts_filter_category_all = /** @type {(inputs: Admin_Posts_Filter_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部分类`)
};

const en_admin_posts_filter_category_all = /** @type {(inputs: Admin_Posts_Filter_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All categories`)
};

/**
* | output |
* | --- |
* | "All categories" |
*
* @param {Admin_Posts_Filter_Category_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_category_all = /** @type {((inputs?: Admin_Posts_Filter_Category_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_Category_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_category_all(inputs)
	return zh_admin_posts_filter_category_all(inputs)
});