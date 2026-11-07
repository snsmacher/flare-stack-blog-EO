/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Sort_LabelInputs */

const zh_admin_posts_sort_label = /** @type {(inputs: Admin_Posts_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const en_admin_posts_sort_label = /** @type {(inputs: Admin_Posts_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort`)
};

/**
* | output |
* | --- |
* | "Sort" |
*
* @param {Admin_Posts_Sort_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_sort_label = /** @type {((inputs?: Admin_Posts_Sort_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Sort_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_sort_label(inputs)
	return zh_admin_posts_sort_label(inputs)
});