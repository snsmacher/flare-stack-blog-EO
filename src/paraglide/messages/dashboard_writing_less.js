/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Writing_LessInputs */

const zh_dashboard_writing_less = /** @type {(inputs: Dashboard_Writing_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少`)
};

const en_dashboard_writing_less = /** @type {(inputs: Dashboard_Writing_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Less`)
};

/**
* | output |
* | --- |
* | "Less" |
*
* @param {Dashboard_Writing_LessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_less = /** @type {((inputs?: Dashboard_Writing_LessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_LessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_less(inputs)
	return zh_dashboard_writing_less(inputs)
});