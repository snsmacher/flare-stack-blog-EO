/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Writing_MoreInputs */

const zh_dashboard_writing_more = /** @type {(inputs: Dashboard_Writing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多`)
};

const en_dashboard_writing_more = /** @type {(inputs: Dashboard_Writing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
};

/**
* | output |
* | --- |
* | "More" |
*
* @param {Dashboard_Writing_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_more = /** @type {((inputs?: Dashboard_Writing_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_more(inputs)
	return zh_dashboard_writing_more(inputs)
});