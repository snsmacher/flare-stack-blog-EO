/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_SearchInputs */

const zh_muted_manager_search = /** @type {(inputs: Muted_Manager_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索用户名`)
};

const en_muted_manager_search = /** @type {(inputs: Muted_Manager_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search usernames`)
};

/**
* | output |
* | --- |
* | "Search usernames" |
*
* @param {Muted_Manager_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_search = /** @type {((inputs?: Muted_Manager_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_search(inputs)
	return zh_muted_manager_search(inputs)
});