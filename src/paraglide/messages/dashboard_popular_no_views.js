/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_No_ViewsInputs */

const zh_dashboard_popular_no_views = /** @type {(inputs: Dashboard_Popular_No_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近 30 天还没有文章被阅读`)
};

const en_dashboard_popular_no_views = /** @type {(inputs: Dashboard_Popular_No_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No post was read in the last 30 days`)
};

/**
* | output |
* | --- |
* | "No post was read in the last 30 days" |
*
* @param {Dashboard_Popular_No_ViewsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_no_views = /** @type {((inputs?: Dashboard_Popular_No_ViewsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_No_ViewsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_no_views(inputs)
	return zh_dashboard_popular_no_views(inputs)
});