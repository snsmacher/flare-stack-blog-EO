/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Format_DatetimeInputs */

const zh_format_datetime = /** @type {(inputs: Format_DatetimeInputs) => LocalizedString} */ (i) => {
	const formattedDateZh = registry.datetime("zh", i?.date, { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedDateTimeEn = registry.datetime("zh", i?.date, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });return /** @type {LocalizedString} */ (`${formattedDateZh}`)
};

const en_format_datetime = /** @type {(inputs: Format_DatetimeInputs) => LocalizedString} */ (i) => {
	const formattedDateZh = registry.datetime("en", i?.date, { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
	const formattedDateTimeEn = registry.datetime("en", i?.date, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });return /** @type {LocalizedString} */ (`${formattedDateTimeEn}`)
};

/**
* | date | output |
* | --- | --- |
* | * | "{formattedDateTimeEn}" |
*
* @param {Format_DatetimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const format_datetime = /** @type {((inputs: Format_DatetimeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Format_DatetimeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_format_datetime(inputs)
	return zh_format_datetime(inputs)
});