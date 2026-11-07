/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_Open_PublicInputs */

const zh_dashboard_popular_open_public = /** @type {(inputs: Dashboard_Popular_Open_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开公开页面`)
};

const en_dashboard_popular_open_public = /** @type {(inputs: Dashboard_Popular_Open_PublicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open public page`)
};

/**
* | output |
* | --- |
* | "Open public page" |
*
* @param {Dashboard_Popular_Open_PublicInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_open_public = /** @type {((inputs?: Dashboard_Popular_Open_PublicInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_Open_PublicInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_open_public(inputs)
	return zh_dashboard_popular_open_public(inputs)
});