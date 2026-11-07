/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, date: NonNullable<unknown> }} Dashboard_Writing_DayInputs */

const zh_dashboard_writing_day = /** @type {(inputs: Dashboard_Writing_DayInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.date}：${formattedCountZh} 次写作`)
};

const en_dashboard_writing_day = /** @type {(inputs: Dashboard_Writing_DayInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${i?.date}: ${formattedCountEn} writing event`);
	return /** @type {LocalizedString} */ (`${i?.date}: ${formattedCountEn} writing events`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{date}: {formattedCountEn} writing event" |
* | * | "{date}: {formattedCountEn} writing events" |
*
* @param {Dashboard_Writing_DayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_day = /** @type {((inputs: Dashboard_Writing_DayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_DayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_day(inputs)
	return zh_dashboard_writing_day(inputs)
});