/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Posts_ResultsInputs */

const zh_admin_posts_results = /** @type {(inputs: Admin_Posts_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`找到 ${i?.count} 篇文章`)
};

const en_admin_posts_results = /** @type {(inputs: Admin_Posts_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Results: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Results: {count}" |
*
* @param {Admin_Posts_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_results = /** @type {((inputs: Admin_Posts_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_results(inputs)
	return zh_admin_posts_results(inputs)
});