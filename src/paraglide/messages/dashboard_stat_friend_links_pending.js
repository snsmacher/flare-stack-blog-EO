/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Stat_Friend_Links_PendingInputs */

const zh_dashboard_stat_friend_links_pending = /** @type {(inputs: Dashboard_Stat_Friend_Links_PendingInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 个待审核`)
};

const en_dashboard_stat_friend_links_pending = /** @type {(inputs: Dashboard_Stat_Friend_Links_PendingInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} awaiting review`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} awaiting review`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} awaiting review" |
* | * | "{formattedCountEn} awaiting review" |
*
* @param {Dashboard_Stat_Friend_Links_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_friend_links_pending = /** @type {((inputs: Dashboard_Stat_Friend_Links_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Friend_Links_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_friend_links_pending(inputs)
	return zh_dashboard_stat_friend_links_pending(inputs)
});