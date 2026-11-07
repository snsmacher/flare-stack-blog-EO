/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_PaginationInputs */

const zh_home_pagination = /** @type {(inputs: Home_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章分页`)
};

const en_home_pagination = /** @type {(inputs: Home_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post pagination`)
};

/**
* | output |
* | --- |
* | "Post pagination" |
*
* @param {Home_PaginationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_pagination = /** @type {((inputs?: Home_PaginationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_PaginationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_pagination(inputs)
	return zh_home_pagination(inputs)
});