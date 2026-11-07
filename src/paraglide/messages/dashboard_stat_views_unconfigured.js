/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Views_UnconfiguredInputs */

const zh_dashboard_stat_views_unconfigured = /** @type {(inputs: Dashboard_Stat_Views_UnconfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未接入 Umami`)
};

const en_dashboard_stat_views_unconfigured = /** @type {(inputs: Dashboard_Stat_Views_UnconfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umami not connected`)
};

/**
* | output |
* | --- |
* | "Umami not connected" |
*
* @param {Dashboard_Stat_Views_UnconfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_views_unconfigured = /** @type {((inputs?: Dashboard_Stat_Views_UnconfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Views_UnconfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_views_unconfigured(inputs)
	return zh_dashboard_stat_views_unconfigured(inputs)
});