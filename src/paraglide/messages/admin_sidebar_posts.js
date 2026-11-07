/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_PostsInputs */

const zh_admin_sidebar_posts = /** @type {(inputs: Admin_Sidebar_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章管理`)
};

const en_admin_sidebar_posts = /** @type {(inputs: Admin_Sidebar_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts`)
};

/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Admin_Sidebar_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_posts = /** @type {((inputs?: Admin_Sidebar_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_posts(inputs)
	return zh_admin_sidebar_posts(inputs)
});