/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Stat_DraftsInputs */

const zh_dashboard_stat_drafts = /** @type {(inputs: Dashboard_Stat_DraftsInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 篇草稿`)
};

const en_dashboard_stat_drafts = /** @type {(inputs: Dashboard_Stat_DraftsInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} draft`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} drafts`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} draft" |
* | * | "{formattedCountEn} drafts" |
*
* @param {Dashboard_Stat_DraftsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_stat_drafts = /** @type {((inputs: Dashboard_Stat_DraftsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stat_DraftsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_stat_drafts(inputs)
	return zh_dashboard_stat_drafts(inputs)
});