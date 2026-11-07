/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_ViewsInputs */

const zh_dashboard_stat_views = /** @type {(inputs: Dashboard_Stat_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近 30 天访问`)
};

const en_dashboard_stat_views = /** @type {(inputs: Dashboard_Stat_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Views, last 30 days`)
};

/**
* | output |
* | --- |
* | "Views, last 30 days" |
*
* @param {Dashboard_Stat_ViewsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_views = /** @type {((inputs?: Dashboard_Stat_ViewsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_ViewsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_views(inputs)
	return zh_dashboard_stat_views(inputs)
});