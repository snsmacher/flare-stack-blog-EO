/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Code_LanguageInputs */

const zh_editor_code_language = /** @type {(inputs: Editor_Code_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代码语言`)
};

const en_editor_code_language = /** @type {(inputs: Editor_Code_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code language`)
};

/**
* | output |
* | --- |
* | "Code language" |
*
* @param {Editor_Code_LanguageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_code_language = /** @type {((inputs?: Editor_Code_LanguageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Code_LanguageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_code_language(inputs)
	return zh_editor_code_language(inputs)
});