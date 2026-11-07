/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_FailedInputs */

const zh_search_failed = /** @type {(inputs: Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索暂时不可用`)
};

const en_search_failed = /** @type {(inputs: Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search is temporarily unavailable`)
};

/**
* | output |
* | --- |
* | "Search is temporarily unavailable" |
*
* @param {Search_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_failed = /** @type {((inputs?: Search_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_failed(inputs)
	return zh_search_failed(inputs)
});