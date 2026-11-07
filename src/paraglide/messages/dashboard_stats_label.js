/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stats_LabelInputs */

const zh_dashboard_stats_label = /** @type {(inputs: Dashboard_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客数据`)
};

const en_dashboard_stats_label = /** @type {(inputs: Dashboard_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog at a glance`)
};

/**
* | output |
* | --- |
* | "Blog at a glance" |
*
* @param {Dashboard_Stats_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stats_label = /** @type {((inputs?: Dashboard_Stats_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stats_label(inputs)
	return zh_dashboard_stats_label(inputs)
});