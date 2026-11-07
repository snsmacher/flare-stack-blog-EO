/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_Unconfigured_DescInputs */

const zh_dashboard_popular_unconfigured_desc = /** @type {(inputs: Dashboard_Popular_Unconfigured_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接入后，这里会按近 30 天的阅读量列出最受欢迎的文章`)
};

const en_dashboard_popular_unconfigured_desc = /** @type {(inputs: Dashboard_Popular_Unconfigured_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once connected, your most-read posts of the last 30 days show up here`)
};

/**
* | output |
* | --- |
* | "Once connected, your most-read posts of the last 30 days show up here" |
*
* @param {Dashboard_Popular_Unconfigured_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_unconfigured_desc = /** @type {((inputs?: Dashboard_Popular_Unconfigured_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_Unconfigured_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_unconfigured_desc(inputs)
	return zh_dashboard_popular_unconfigured_desc(inputs)
});