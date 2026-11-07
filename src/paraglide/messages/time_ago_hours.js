/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Time_Ago_HoursInputs */

const zh_time_ago_hours = /** @type {(inputs: Time_Ago_HoursInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 小时前`)
};

const en_time_ago_hours = /** @type {(inputs: Time_Ago_HoursInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn}h ago`);
	return /** @type {LocalizedString} */ (`${formattedCountEn}h ago`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn}h ago" |
* | * | "{formattedCountEn}h ago" |
*
* @param {Time_Ago_HoursInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const time_ago_hours = /** @type {((inputs: Time_Ago_HoursInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Time_Ago_HoursInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_time_ago_hours(inputs)
	return zh_time_ago_hours(inputs)
});