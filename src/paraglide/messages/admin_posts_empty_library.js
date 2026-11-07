/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Empty_LibraryInputs */

const zh_admin_posts_empty_library = /** @type {(inputs: Admin_Posts_Empty_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无文章`)
};

const en_admin_posts_empty_library = /** @type {(inputs: Admin_Posts_Empty_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No posts`)
};

/**
* | output |
* | --- |
* | "No posts" |
*
* @param {Admin_Posts_Empty_LibraryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_empty_library = /** @type {((inputs?: Admin_Posts_Empty_LibraryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Empty_LibraryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_empty_library(inputs)
	return zh_admin_posts_empty_library(inputs)
});