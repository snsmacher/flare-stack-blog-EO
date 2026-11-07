/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_AllInputs */

const zh_admin_posts_filter_all = /** @type {(inputs: Admin_Posts_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const en_admin_posts_filter_all = /** @type {(inputs: Admin_Posts_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Posts_Filter_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_all = /** @type {((inputs?: Admin_Posts_Filter_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_all(inputs)
	return zh_admin_posts_filter_all(inputs)
});