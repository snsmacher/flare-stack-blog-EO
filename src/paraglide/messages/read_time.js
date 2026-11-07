/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Read_TimeInputs */

const zh_read_time = /** @type {(inputs: Read_TimeInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 分钟`)
};

const en_read_time = /** @type {(inputs: Read_TimeInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} minute`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} minutes`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} minute" |
* | * | "{formattedCountEn} minutes" |
*
* @param {Read_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const read_time = /** @type {((inputs: Read_TimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Read_TimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_read_time(inputs)
	return zh_read_time(inputs)
});