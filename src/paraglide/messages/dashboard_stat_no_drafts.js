/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_No_DraftsInputs */

const zh_dashboard_stat_no_drafts = /** @type {(inputs: Dashboard_Stat_No_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有草稿`)
};

const en_dashboard_stat_no_drafts = /** @type {(inputs: Dashboard_Stat_No_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No drafts`)
};

/**
* | output |
* | --- |
* | "No drafts" |
*
* @param {Dashboard_Stat_No_DraftsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_no_drafts = /** @type {((inputs?: Dashboard_Stat_No_DraftsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_No_DraftsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_no_drafts(inputs)
	return zh_dashboard_stat_no_drafts(inputs)
});