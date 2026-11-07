/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_PostsInputs */

const zh_dashboard_stat_posts = /** @type {(inputs: Dashboard_Stat_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章`)
};

const en_dashboard_stat_posts = /** @type {(inputs: Dashboard_Stat_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts`)
};

/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Dashboard_Stat_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_posts = /** @type {((inputs?: Dashboard_Stat_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_posts(inputs)
	return zh_dashboard_stat_posts(inputs)
});