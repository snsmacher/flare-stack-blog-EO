/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_No_ResultsInputs */

const zh_search_no_results = /** @type {(inputs: Search_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到相关文章`)
};

const en_search_no_results = /** @type {(inputs: Search_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No results found`)
};

/**
* | output |
* | --- |
* | "No results found" |
*
* @param {Search_No_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_no_results = /** @type {((inputs?: Search_No_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_No_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_no_results(inputs)
	return zh_search_no_results(inputs)
});