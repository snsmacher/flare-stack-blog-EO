/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_SearchInputs */

const zh_nav_search = /** @type {(inputs: Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const en_nav_search = /** @type {(inputs: Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Nav_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const nav_search = /** @type {((inputs?: Nav_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_search(inputs)
	return zh_nav_search(inputs)
});