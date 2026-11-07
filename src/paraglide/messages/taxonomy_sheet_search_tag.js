/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Search_TagInputs */

const zh_taxonomy_sheet_search_tag = /** @type {(inputs: Taxonomy_Sheet_Search_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索或新建标签`)
};

const en_taxonomy_sheet_search_tag = /** @type {(inputs: Taxonomy_Sheet_Search_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search or create a tag`)
};

/**
* | output |
* | --- |
* | "Search or create a tag" |
*
* @param {Taxonomy_Sheet_Search_TagInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_search_tag = /** @type {((inputs?: Taxonomy_Sheet_Search_TagInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Search_TagInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_search_tag(inputs)
	return zh_taxonomy_sheet_search_tag(inputs)
});