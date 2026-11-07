/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_Search_HintInputs */

const zh_muted_manager_search_hint = /** @type {(inputs: Muted_Manager_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`换个关键词，或清除搜索查看全部名单。`)
};

const en_muted_manager_search_hint = /** @type {(inputs: Muted_Manager_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try another name or clear the search to see everyone.`)
};

/**
* | output |
* | --- |
* | "Try another name or clear the search to see everyone." |
*
* @param {Muted_Manager_Search_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_search_hint = /** @type {((inputs?: Muted_Manager_Search_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_Search_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_search_hint(inputs)
	return zh_muted_manager_search_hint(inputs)
});