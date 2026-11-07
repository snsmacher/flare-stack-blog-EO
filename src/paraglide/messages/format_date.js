/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Format_DateInputs */

const zh_format_date = /** @type {(inputs: Format_DateInputs) => LocalizedString} */ (i) => {
	const formattedDateZh = registry.datetime("zh", i?.date, { year: "numeric", month: "long", day: "numeric" });
	const formattedDateEn = registry.datetime("zh", i?.date, { year: "numeric", month: "2-digit", day: "2-digit" });return /** @type {LocalizedString} */ (`${formattedDateZh}`)
};

const en_format_date = /** @type {(inputs: Format_DateInputs) => LocalizedString} */ (i) => {
	const formattedDateZh = registry.datetime("en", i?.date, { year: "numeric", month: "long", day: "numeric" });
	const formattedDateEn = registry.datetime("en", i?.date, { year: "numeric", month: "2-digit", day: "2-digit" });return /** @type {LocalizedString} */ (`${formattedDateEn}`)
};

/**
* | date | output |
* | --- | --- |
* | * | "{formattedDateEn}" |
*
* @param {Format_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const format_date = /** @type {((inputs: Format_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Format_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_format_date(inputs)
	return zh_format_date(inputs)
});