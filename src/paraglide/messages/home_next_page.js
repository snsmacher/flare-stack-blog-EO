/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Next_PageInputs */

const zh_home_next_page = /** @type {(inputs: Home_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const en_home_next_page = /** @type {(inputs: Home_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next page`)
};

/**
* | output |
* | --- |
* | "Next page" |
*
* @param {Home_Next_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_next_page = /** @type {((inputs?: Home_Next_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Next_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_next_page(inputs)
	return zh_home_next_page(inputs)
});