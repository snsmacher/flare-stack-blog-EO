/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stat_Friend_LinksInputs */

const zh_dashboard_stat_friend_links = /** @type {(inputs: Dashboard_Stat_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链`)
};

const en_dashboard_stat_friend_links = /** @type {(inputs: Dashboard_Stat_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend links`)
};

/**
* | output |
* | --- |
* | "Friend links" |
*
* @param {Dashboard_Stat_Friend_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_friend_links = /** @type {((inputs?: Dashboard_Stat_Friend_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Friend_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_friend_links(inputs)
	return zh_dashboard_stat_friend_links(inputs)
});