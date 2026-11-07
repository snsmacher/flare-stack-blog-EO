/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Summary_UnrepliedInputs */

const zh_dashboard_summary_unreplied = /** @type {(inputs: Dashboard_Summary_UnrepliedInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 条评论等你回复`)
};

const en_dashboard_summary_unreplied = /** @type {(inputs: Dashboard_Summary_UnrepliedInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} comment awaits your reply`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} comments await your reply`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} comment awaits your reply" |
* | * | "{formattedCountEn} comments await your reply" |
*
* @param {Dashboard_Summary_UnrepliedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_summary_unreplied = /** @type {((inputs: Dashboard_Summary_UnrepliedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Summary_UnrepliedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_summary_unreplied(inputs)
	return zh_dashboard_summary_unreplied(inputs)
});