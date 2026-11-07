/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Summary_ClearInputs */

const zh_dashboard_summary_clear = /** @type {(inputs: Dashboard_Summary_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`都处理好了，今天适合写点什么`)
};

const en_dashboard_summary_clear = /** @type {(inputs: Dashboard_Summary_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All caught up — a good day to write`)
};

/**
* | output |
* | --- |
* | "All caught up — a good day to write" |
*
* @param {Dashboard_Summary_ClearInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_summary_clear = /** @type {((inputs?: Dashboard_Summary_ClearInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Summary_ClearInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_summary_clear(inputs)
	return zh_dashboard_summary_clear(inputs)
});