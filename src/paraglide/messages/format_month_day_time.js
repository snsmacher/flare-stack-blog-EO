/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Format_Month_Day_TimeInputs */

const zh_format_month_day_time = /** @type {(inputs: Format_Month_Day_TimeInputs) => LocalizedString} */ (i) => {
	const formattedDateTimeZh = registry.datetime("zh", i?.date, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedDateTimeEn = registry.datetime("zh", i?.date, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: true });return /** @type {LocalizedString} */ (`${formattedDateTimeZh}`)
};

const en_format_month_day_time = /** @type {(inputs: Format_Month_Day_TimeInputs) => LocalizedString} */ (i) => {
	const formattedDateTimeZh = registry.datetime("en", i?.date, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedDateTimeEn = registry.datetime("en", i?.date, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: true });return /** @type {LocalizedString} */ (`${formattedDateTimeEn}`)
};

/**
* | date | output |
* | --- | --- |
* | * | "{formattedDateTimeEn}" |
*
* @param {Format_Month_Day_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const format_month_day_time = /** @type {((inputs: Format_Month_Day_TimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Format_Month_Day_TimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_format_month_day_time(inputs)
	return zh_format_month_day_time(inputs)
});