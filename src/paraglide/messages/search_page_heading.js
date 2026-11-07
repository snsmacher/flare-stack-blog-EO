/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_HeadingInputs */

const zh_search_page_heading = /** @type {(inputs: Search_Page_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索文章`)
};

const en_search_page_heading = /** @type {(inputs: Search_Page_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search posts`)
};

/**
* | output |
* | --- |
* | "Search posts" |
*
* @param {Search_Page_HeadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_page_heading = /** @type {((inputs?: Search_Page_HeadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_HeadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_page_heading(inputs)
	return zh_search_page_heading(inputs)
});