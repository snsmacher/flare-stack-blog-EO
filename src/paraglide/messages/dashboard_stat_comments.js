/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_CommentsInputs */

const zh_dashboard_stat_comments = /** @type {(inputs: Dashboard_Stat_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const en_dashboard_stat_comments = /** @type {(inputs: Dashboard_Stat_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Dashboard_Stat_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_comments = /** @type {((inputs?: Dashboard_Stat_CommentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_CommentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_comments(inputs)
	return zh_dashboard_stat_comments(inputs)
});