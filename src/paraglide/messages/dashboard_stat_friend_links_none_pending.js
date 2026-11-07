/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Friend_Links_None_PendingInputs */

const zh_dashboard_stat_friend_links_none_pending = /** @type {(inputs: Dashboard_Stat_Friend_Links_None_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待审核`)
};

const en_dashboard_stat_friend_links_none_pending = /** @type {(inputs: Dashboard_Stat_Friend_Links_None_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None awaiting review`)
};

/**
* | output |
* | --- |
* | "None awaiting review" |
*
* @param {Dashboard_Stat_Friend_Links_None_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_friend_links_none_pending = /** @type {((inputs?: Dashboard_Stat_Friend_Links_None_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Friend_Links_None_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_friend_links_none_pending(inputs)
	return zh_dashboard_stat_friend_links_none_pending(inputs)
});