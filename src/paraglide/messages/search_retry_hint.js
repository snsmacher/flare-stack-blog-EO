/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Retry_HintInputs */

const zh_search_retry_hint = /** @type {(inputs: Search_Retry_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载搜索结果，请重试。`)
};

const en_search_retry_hint = /** @type {(inputs: Search_Retry_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load search results. Please try again.`)
};

/**
* | output |
* | --- |
* | "Could not load search results. Please try again." |
*
* @param {Search_Retry_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_retry_hint = /** @type {((inputs?: Search_Retry_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Retry_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_retry_hint(inputs)
	return zh_search_retry_hint(inputs)
});