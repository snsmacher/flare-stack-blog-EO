/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_Missing_TitleInputs */

const zh_dashboard_popular_missing_title = /** @type {(inputs: Dashboard_Popular_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有热度数据`)
};

const en_dashboard_popular_missing_title = /** @type {(inputs: Dashboard_Popular_Missing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No popularity data yet`)
};

/**
* | output |
* | --- |
* | "No popularity data yet" |
*
* @param {Dashboard_Popular_Missing_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_missing_title = /** @type {((inputs?: Dashboard_Popular_Missing_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_Missing_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_missing_title(inputs)
	return zh_dashboard_popular_missing_title(inputs)
});