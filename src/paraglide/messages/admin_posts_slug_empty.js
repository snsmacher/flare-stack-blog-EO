/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Slug_EmptyInputs */

const zh_admin_posts_slug_empty = /** @type {(inputs: Admin_Posts_Slug_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未设置链接`)
};

const en_admin_posts_slug_empty = /** @type {(inputs: Admin_Posts_Slug_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No URL yet`)
};

/**
* | output |
* | --- |
* | "No URL yet" |
*
* @param {Admin_Posts_Slug_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_slug_empty = /** @type {((inputs?: Admin_Posts_Slug_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Slug_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_slug_empty(inputs)
	return zh_admin_posts_slug_empty(inputs)
});