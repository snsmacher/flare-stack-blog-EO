/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_TagInputs */

const zh_admin_posts_filter_tag = /** @type {(inputs: Admin_Posts_Filter_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const en_admin_posts_filter_tag = /** @type {(inputs: Admin_Posts_Filter_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

/**
* | output |
* | --- |
* | "Tag" |
*
* @param {Admin_Posts_Filter_TagInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_tag = /** @type {((inputs?: Admin_Posts_Filter_TagInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_TagInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_tag(inputs)
	return zh_admin_posts_filter_tag(inputs)
});