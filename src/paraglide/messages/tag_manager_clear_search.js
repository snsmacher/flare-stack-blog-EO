/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_Clear_SearchInputs */

const zh_tag_manager_clear_search = /** @type {(inputs: Tag_Manager_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除搜索`)
};

const en_tag_manager_clear_search = /** @type {(inputs: Tag_Manager_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Tag_Manager_Clear_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_clear_search = /** @type {((inputs?: Tag_Manager_Clear_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_Clear_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_clear_search(inputs)
	return zh_tag_manager_clear_search(inputs)
});