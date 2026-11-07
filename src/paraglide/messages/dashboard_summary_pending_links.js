/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Summary_Pending_LinksInputs */

const zh_dashboard_summary_pending_links = /** @type {(inputs: Dashboard_Summary_Pending_LinksInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 个友链待审核`)
};

const en_dashboard_summary_pending_links = /** @type {(inputs: Dashboard_Summary_Pending_LinksInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} friend link to review`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} friend links to review`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} friend link to review" |
* | * | "{formattedCountEn} friend links to review" |
*
* @param {Dashboard_Summary_Pending_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_summary_pending_links = /** @type {((inputs: Dashboard_Summary_Pending_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Summary_Pending_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_summary_pending_links(inputs)
	return zh_dashboard_summary_pending_links(inputs)
});