/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Views_MissingInputs */

const zh_dashboard_stat_views_missing = /** @type {(inputs: Dashboard_Stat_Views_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有同步数据`)
};

const en_dashboard_stat_views_missing = /** @type {(inputs: Dashboard_Stat_Views_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not synced yet`)
};

/**
* | output |
* | --- |
* | "Not synced yet" |
*
* @param {Dashboard_Stat_Views_MissingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_views_missing = /** @type {((inputs?: Dashboard_Stat_Views_MissingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Views_MissingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_views_missing(inputs)
	return zh_dashboard_stat_views_missing(inputs)
});