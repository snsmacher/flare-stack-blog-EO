/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_CategoryInputs */

const zh_admin_posts_filter_category = /** @type {(inputs: Admin_Posts_Filter_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const en_admin_posts_filter_category = /** @type {(inputs: Admin_Posts_Filter_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Admin_Posts_Filter_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_category = /** @type {((inputs?: Admin_Posts_Filter_CategoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_CategoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_category(inputs)
	return zh_admin_posts_filter_category(inputs)
});