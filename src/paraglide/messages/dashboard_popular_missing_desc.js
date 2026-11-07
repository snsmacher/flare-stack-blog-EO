/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_Missing_DescInputs */

const zh_dashboard_popular_missing_desc = /** @type {(inputs: Dashboard_Popular_Missing_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热度每天自动同步一次，也可以现在手动同步`)
};

const en_dashboard_popular_missing_desc = /** @type {(inputs: Dashboard_Popular_Missing_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularity syncs once a day, or you can sync it now`)
};

/**
* | output |
* | --- |
* | "Popularity syncs once a day, or you can sync it now" |
*
* @param {Dashboard_Popular_Missing_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_missing_desc = /** @type {((inputs?: Dashboard_Popular_Missing_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_Missing_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_missing_desc(inputs)
	return zh_dashboard_popular_missing_desc(inputs)
});