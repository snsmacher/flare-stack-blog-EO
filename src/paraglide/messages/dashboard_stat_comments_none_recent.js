/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Comments_None_RecentInputs */

const zh_dashboard_stat_comments_none_recent = /** @type {(inputs: Dashboard_Stat_Comments_None_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近 7 天没有新评论`)
};

const en_dashboard_stat_comments_none_recent = /** @type {(inputs: Dashboard_Stat_Comments_None_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None in the last 7 days`)
};

/**
* | output |
* | --- |
* | "None in the last 7 days" |
*
* @param {Dashboard_Stat_Comments_None_RecentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_comments_none_recent = /** @type {((inputs?: Dashboard_Stat_Comments_None_RecentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Comments_None_RecentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_comments_none_recent(inputs)
	return zh_dashboard_stat_comments_none_recent(inputs)
});