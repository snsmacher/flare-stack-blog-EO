/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_LoadingInputs */

const zh_search_loading = /** @type {(inputs: Search_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索…`)
};

const en_search_loading = /** @type {(inputs: Search_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching…`)
};

/**
* | output |
* | --- |
* | "Searching…" |
*
* @param {Search_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_loading = /** @type {((inputs?: Search_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_loading(inputs)
	return zh_search_loading(inputs)
});