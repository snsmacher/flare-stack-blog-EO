/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_Search_PlaceholderInputs */

const zh_tag_selector_search_placeholder = /** @type {(inputs: Tag_Selector_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索或创建标签...`)
};

const en_tag_selector_search_placeholder = /** @type {(inputs: Tag_Selector_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search or create tag...`)
};

/**
* | output |
* | --- |
* | "Search or create tag..." |
*
* @param {Tag_Selector_Search_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_search_placeholder = /** @type {((inputs?: Tag_Selector_Search_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_Search_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_search_placeholder(inputs)
	return zh_tag_selector_search_placeholder(inputs)
});