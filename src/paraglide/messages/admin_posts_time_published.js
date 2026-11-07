/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Time_PublishedInputs */

const zh_admin_posts_time_published = /** @type {(inputs: Admin_Posts_Time_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布`)
};

const en_admin_posts_time_published = /** @type {(inputs: Admin_Posts_Time_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Admin_Posts_Time_PublishedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_time_published = /** @type {((inputs?: Admin_Posts_Time_PublishedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Time_PublishedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_time_published(inputs)
	return zh_admin_posts_time_published(inputs)
});