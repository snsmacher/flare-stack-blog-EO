/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Previous_PageInputs */

const zh_home_previous_page = /** @type {(inputs: Home_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const en_home_previous_page = /** @type {(inputs: Home_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous page`)
};

/**
* | output |
* | --- |
* | "Previous page" |
*
* @param {Home_Previous_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_previous_page = /** @type {((inputs?: Home_Previous_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Previous_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_previous_page(inputs)
	return zh_home_previous_page(inputs)
});