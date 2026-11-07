/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Time_Ago_DaysInputs */

const zh_time_ago_days = /** @type {(inputs: Time_Ago_DaysInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 天前`)
};

const en_time_ago_days = /** @type {(inputs: Time_Ago_DaysInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn}d ago`);
	return /** @type {LocalizedString} */ (`${formattedCountEn}d ago`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn}d ago" |
* | * | "{formattedCountEn}d ago" |
*
* @param {Time_Ago_DaysInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const time_ago_days = /** @type {((inputs: Time_Ago_DaysInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Time_Ago_DaysInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_time_ago_days(inputs)
	return zh_time_ago_days(inputs)
});