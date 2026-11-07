/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Code_Language_SearchInputs */

const zh_editor_code_language_search = /** @type {(inputs: Editor_Code_Language_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索语言`)
};

const en_editor_code_language_search = /** @type {(inputs: Editor_Code_Language_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search languages`)
};

/**
* | output |
* | --- |
* | "Search languages" |
*
* @param {Editor_Code_Language_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_code_language_search = /** @type {((inputs?: Editor_Code_Language_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Code_Language_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_code_language_search(inputs)
	return zh_editor_code_language_search(inputs)
});