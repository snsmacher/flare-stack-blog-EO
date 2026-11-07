/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Posts_TotalInputs */

const zh_admin_posts_total = /** @type {(inputs: Admin_Posts_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 篇文章`)
};

const en_admin_posts_total = /** @type {(inputs: Admin_Posts_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Posts: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Posts: {count}" |
*
* @param {Admin_Posts_TotalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_total = /** @type {((inputs: Admin_Posts_TotalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_TotalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_total(inputs)
	return zh_admin_posts_total(inputs)
});