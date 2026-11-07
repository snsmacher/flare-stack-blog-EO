/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Views_ExpiredInputs */

const zh_dashboard_stat_views_expired = /** @type {(inputs: Dashboard_Stat_Views_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数据已过期`)
};

const en_dashboard_stat_views_expired = /** @type {(inputs: Dashboard_Stat_Views_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data is out of date`)
};

/**
* | output |
* | --- |
* | "Data is out of date" |
*
* @param {Dashboard_Stat_Views_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_views_expired = /** @type {((inputs?: Dashboard_Stat_Views_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Views_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_views_expired(inputs)
	return zh_dashboard_stat_views_expired(inputs)
});