/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_RetryInputs */

const zh_search_retry = /** @type {(inputs: Search_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新搜索`)
};

const en_search_retry = /** @type {(inputs: Search_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry search`)
};

/**
* | output |
* | --- |
* | "Retry search" |
*
* @param {Search_RetryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_retry = /** @type {((inputs?: Search_RetryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_RetryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_retry(inputs)
	return zh_search_retry(inputs)
});