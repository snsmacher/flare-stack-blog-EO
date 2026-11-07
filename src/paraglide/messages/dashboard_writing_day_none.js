/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Dashboard_Writing_Day_NoneInputs */

const zh_dashboard_writing_day_none = /** @type {(inputs: Dashboard_Writing_Day_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}：没有写作`)
};

const en_dashboard_writing_day_none = /** @type {(inputs: Dashboard_Writing_Day_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: no writing`)
};

/**
* | output |
* | --- |
* | "{date}: no writing" |
*
* @param {Dashboard_Writing_Day_NoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_day_none = /** @type {((inputs: Dashboard_Writing_Day_NoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_Day_NoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_day_none(inputs)
	return zh_dashboard_writing_day_none(inputs)
});