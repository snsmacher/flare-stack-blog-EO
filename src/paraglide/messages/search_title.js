/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_TitleInputs */

const zh_search_title = /** @type {(inputs: Search_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const en_search_title = /** @type {(inputs: Search_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Search_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_title = /** @type {((inputs?: Search_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_title(inputs)
	return zh_search_title(inputs)
});