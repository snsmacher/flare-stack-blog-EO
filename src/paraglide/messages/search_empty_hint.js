/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Empty_HintInputs */

const zh_search_empty_hint = /** @type {(inputs: Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试更简短的关键词，或检查是否有错别字。`)
};

const en_search_empty_hint = /** @type {(inputs: Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try a shorter keyword or check the spelling.`)
};

/**
* | output |
* | --- |
* | "Try a shorter keyword or check the spelling." |
*
* @param {Search_Empty_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_empty_hint = /** @type {((inputs?: Search_Empty_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Empty_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_empty_hint(inputs)
	return zh_search_empty_hint(inputs)
});