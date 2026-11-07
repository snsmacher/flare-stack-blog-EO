/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_TitleInputs */

const zh_admin_posts_title = /** @type {(inputs: Admin_Posts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章管理`)
};

const en_admin_posts_title = /** @type {(inputs: Admin_Posts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts`)
};

/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Admin_Posts_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_title = /** @type {((inputs?: Admin_Posts_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_title(inputs)
	return zh_admin_posts_title(inputs)
});