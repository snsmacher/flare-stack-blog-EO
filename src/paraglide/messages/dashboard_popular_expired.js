/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_ExpiredInputs */

const zh_dashboard_popular_expired = /** @type {(inputs: Dashboard_Popular_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已过期`)
};

const en_dashboard_popular_expired = /** @type {(inputs: Dashboard_Popular_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Out of date`)
};

/**
* | output |
* | --- |
* | "Out of date" |
*
* @param {Dashboard_Popular_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_expired = /** @type {((inputs?: Dashboard_Popular_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_expired(inputs)
	return zh_dashboard_popular_expired(inputs)
});