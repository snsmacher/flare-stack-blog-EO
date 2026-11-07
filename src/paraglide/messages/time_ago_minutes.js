/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Time_Ago_MinutesInputs */

const zh_time_ago_minutes = /** @type {(inputs: Time_Ago_MinutesInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 分钟前`)
};

const en_time_ago_minutes = /** @type {(inputs: Time_Ago_MinutesInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn}m ago`);
	return /** @type {LocalizedString} */ (`${formattedCountEn}m ago`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn}m ago" |
* | * | "{formattedCountEn}m ago" |
*
* @param {Time_Ago_MinutesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const time_ago_minutes = /** @type {((inputs: Time_Ago_MinutesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Time_Ago_MinutesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_time_ago_minutes(inputs)
	return zh_time_ago_minutes(inputs)
});