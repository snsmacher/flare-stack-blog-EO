/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Unreplied_MoreInputs */

const zh_dashboard_unreplied_more = /** @type {(inputs: Dashboard_Unreplied_MoreInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${formattedCountZh} 条待回复`)
};

const en_dashboard_unreplied_more = /** @type {(inputs: Dashboard_Unreplied_MoreInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} more awaiting reply`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} more awaiting reply`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} more awaiting reply" |
* | * | "{formattedCountEn} more awaiting reply" |
*
* @param {Dashboard_Unreplied_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_more = /** @type {((inputs: Dashboard_Unreplied_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_more(inputs)
	return zh_dashboard_unreplied_more(inputs)
});