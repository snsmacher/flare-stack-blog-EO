/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Search_Result_CountInputs */

const zh_search_result_count = /** @type {(inputs: Search_Result_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示 ${i?.count} 条搜索结果`)
};

const en_search_result_count = /** @type {(inputs: Search_Result_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing ${i?.count} search results`)
};

/**
* | output |
* | --- |
* | "Showing {count} search results" |
*
* @param {Search_Result_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_result_count = /** @type {((inputs: Search_Result_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Result_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_result_count(inputs)
	return zh_search_result_count(inputs)
});