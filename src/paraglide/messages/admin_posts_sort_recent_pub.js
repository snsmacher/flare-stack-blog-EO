/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Sort_Recent_PubInputs */

const zh_admin_posts_sort_recent_pub = /** @type {(inputs: Admin_Posts_Sort_Recent_PubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近发布`)
};

const en_admin_posts_sort_recent_pub = /** @type {(inputs: Admin_Posts_Sort_Recent_PubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Admin_Posts_Sort_Recent_PubInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_sort_recent_pub = /** @type {((inputs?: Admin_Posts_Sort_Recent_PubInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Sort_Recent_PubInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_sort_recent_pub(inputs)
	return zh_admin_posts_sort_recent_pub(inputs)
});