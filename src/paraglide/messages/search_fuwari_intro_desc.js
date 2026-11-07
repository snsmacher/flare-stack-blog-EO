/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Fuwari_Intro_DescInputs */

const zh_search_fuwari_intro_desc = /** @type {(inputs: Search_Fuwari_Intro_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入关键词即可实时检索文章标题、正文、摘要与标签。`)
};

const en_search_fuwari_intro_desc = /** @type {(inputs: Search_Fuwari_Intro_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter keywords above to search across post titles, summaries, content, and tags in real time.`)
};

/**
* | output |
* | --- |
* | "Enter keywords above to search across post titles, summaries, content, and tags in real time." |
*
* @param {Search_Fuwari_Intro_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_fuwari_intro_desc = /** @type {((inputs?: Search_Fuwari_Intro_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Fuwari_Intro_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_fuwari_intro_desc(inputs)
	return zh_search_fuwari_intro_desc(inputs)
});