/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown> }} Home_Page_NumberInputs */

const zh_home_page_number = /** @type {(inputs: Home_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页`)
};

const en_home_page_number = /** @type {(inputs: Home_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
};

/**
* | output |
* | --- |
* | "Page {page}" |
*
* @param {Home_Page_NumberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_page_number = /** @type {((inputs: Home_Page_NumberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Page_NumberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_page_number(inputs)
	return zh_home_page_number(inputs)
});