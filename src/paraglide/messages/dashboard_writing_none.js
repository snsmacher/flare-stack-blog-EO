/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Writing_NoneInputs */

const zh_dashboard_writing_none = /** @type {(inputs: Dashboard_Writing_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`近半年还没有写作记录`)
};

const en_dashboard_writing_none = /** @type {(inputs: Dashboard_Writing_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No writing in the last 6 months`)
};

/**
* | output |
* | --- |
* | "No writing in the last 6 months" |
*
* @param {Dashboard_Writing_NoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_none = /** @type {((inputs?: Dashboard_Writing_NoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_NoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_none(inputs)
	return zh_dashboard_writing_none(inputs)
});