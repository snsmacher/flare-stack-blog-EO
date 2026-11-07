/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_ClearInputs */

const zh_search_clear = /** @type {(inputs: Search_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空搜索`)
};

const en_search_clear = /** @type {(inputs: Search_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Search_ClearInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_clear = /** @type {((inputs?: Search_ClearInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_ClearInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_clear(inputs)
	return zh_search_clear(inputs)
});