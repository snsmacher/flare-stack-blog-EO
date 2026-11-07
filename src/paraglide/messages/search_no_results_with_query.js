/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Search_No_Results_With_QueryInputs */

const zh_search_no_results_with_query = /** @type {(inputs: Search_No_Results_With_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有找到与 "${i?.query}" 相关的文章，换个关键词试试吧。`)
};

const en_search_no_results_with_query = /** @type {(inputs: Search_No_Results_With_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No posts found matching "${i?.query}". Try searching with different keywords.`)
};

/**
* | query | output |
* | --- | --- |
* | * | "No posts found matching \"{query}\". Try searching with different keywords." |
*
* @param {Search_No_Results_With_QueryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_no_results_with_query = /** @type {((inputs: Search_No_Results_With_QueryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_No_Results_With_QueryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_no_results_with_query(inputs)
	return zh_search_no_results_with_query(inputs)
});