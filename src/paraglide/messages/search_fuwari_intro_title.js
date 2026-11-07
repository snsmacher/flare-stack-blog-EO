/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Fuwari_Intro_TitleInputs */

const zh_search_fuwari_intro_title = /** @type {(inputs: Search_Fuwari_Intro_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索站内文章`)
};

const en_search_fuwari_intro_title = /** @type {(inputs: Search_Fuwari_Intro_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search Articles`)
};

/**
* | output |
* | --- |
* | "Search Articles" |
*
* @param {Search_Fuwari_Intro_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_fuwari_intro_title = /** @type {((inputs?: Search_Fuwari_Intro_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Fuwari_Intro_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_search_fuwari_intro_title(inputs)
	return zh_search_fuwari_intro_title(inputs)
});