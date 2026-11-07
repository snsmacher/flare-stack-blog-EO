/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Stat_Comments_RecentInputs */

const zh_dashboard_stat_comments_recent = /** @type {(inputs: Dashboard_Stat_Comments_RecentInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`近 7 天 +${formattedCountZh}`)
};

const en_dashboard_stat_comments_recent = /** @type {(inputs: Dashboard_Stat_Comments_RecentInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`+${formattedCountEn} in the last 7 days`);
	return /** @type {LocalizedString} */ (`+${formattedCountEn} in the last 7 days`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "+{formattedCountEn} in the last 7 days" |
* | * | "+{formattedCountEn} in the last 7 days" |
*
* @param {Dashboard_Stat_Comments_RecentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_comments_recent = /** @type {((inputs: Dashboard_Stat_Comments_RecentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_Comments_RecentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_comments_recent(inputs)
	return zh_dashboard_stat_comments_recent(inputs)
});