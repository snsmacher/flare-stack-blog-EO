/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Search_CategoryInputs */

const zh_taxonomy_sheet_search_category = /** @type {(inputs: Taxonomy_Sheet_Search_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索或新建分类`)
};

const en_taxonomy_sheet_search_category = /** @type {(inputs: Taxonomy_Sheet_Search_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search or create a category`)
};

/**
* | output |
* | --- |
* | "Search or create a category" |
*
* @param {Taxonomy_Sheet_Search_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_search_category = /** @type {((inputs?: Taxonomy_Sheet_Search_CategoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Search_CategoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_search_category(inputs)
	return zh_taxonomy_sheet_search_category(inputs)
});