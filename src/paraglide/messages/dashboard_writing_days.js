/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Writing_DaysInputs */

const zh_dashboard_writing_days = /** @type {(inputs: Dashboard_Writing_DaysInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`近半年写作 ${formattedCountZh} 天`)
};

const en_dashboard_writing_days = /** @type {(inputs: Dashboard_Writing_DaysInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`Wrote on ${formattedCountEn} day in 6 months`);
	return /** @type {LocalizedString} */ (`Wrote on ${formattedCountEn} days in 6 months`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "Wrote on {formattedCountEn} day in 6 months" |
* | * | "Wrote on {formattedCountEn} days in 6 months" |
*
* @param {Dashboard_Writing_DaysInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_days = /** @type {((inputs: Dashboard_Writing_DaysInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_DaysInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_days(inputs)
	return zh_dashboard_writing_days(inputs)
});