/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Clear_FiltersInputs */

const zh_admin_posts_clear_filters = /** @type {(inputs: Admin_Posts_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const en_admin_posts_clear_filters = /** @type {(inputs: Admin_Posts_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Admin_Posts_Clear_FiltersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_clear_filters = /** @type {((inputs?: Admin_Posts_Clear_FiltersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Clear_FiltersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_clear_filters(inputs)
	return zh_admin_posts_clear_filters(inputs)
});