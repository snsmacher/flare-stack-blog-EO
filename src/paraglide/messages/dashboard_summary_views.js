/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Summary_ViewsInputs */

const zh_dashboard_summary_views = /** @type {(inputs: Dashboard_Summary_ViewsInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`近 30 天 ${formattedCountZh} 次访问`)
};

const en_dashboard_summary_views = /** @type {(inputs: Dashboard_Summary_ViewsInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} visit in 30 days`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} visits in 30 days`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} visit in 30 days" |
* | * | "{formattedCountEn} visits in 30 days" |
*
* @param {Dashboard_Summary_ViewsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_summary_views = /** @type {((inputs: Dashboard_Summary_ViewsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Summary_ViewsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_summary_views(inputs)
	return zh_dashboard_summary_views(inputs)
});