/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_TitleInputs */

const zh_dashboard_popular_title = /** @type {(inputs: Dashboard_Popular_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近 30 天热门`)
};

const en_dashboard_popular_title = /** @type {(inputs: Dashboard_Popular_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popular in the last 30 days`)
};

/**
* | output |
* | --- |
* | "Popular in the last 30 days" |
*
* @param {Dashboard_Popular_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_title = /** @type {((inputs?: Dashboard_Popular_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_title(inputs)
	return zh_dashboard_popular_title(inputs)
});