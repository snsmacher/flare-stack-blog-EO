/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Pending_Links_MoreInputs */

const zh_dashboard_pending_links_more = /** @type {(inputs: Dashboard_Pending_Links_MoreInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${formattedCountZh} 条申请`)
};

const en_dashboard_pending_links_more = /** @type {(inputs: Dashboard_Pending_Links_MoreInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} more request`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} more requests`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} more request" |
* | * | "{formattedCountEn} more requests" |
*
* @param {Dashboard_Pending_Links_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_pending_links_more = /** @type {((inputs: Dashboard_Pending_Links_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Pending_Links_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_pending_links_more(inputs)
	return zh_dashboard_pending_links_more(inputs)
});