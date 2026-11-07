/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Code_Language_EmptyInputs */

const zh_editor_code_language_empty = /** @type {(inputs: Editor_Code_Language_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的语言`)
};

const en_editor_code_language_empty = /** @type {(inputs: Editor_Code_Language_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching language`)
};

/**
* | output |
* | --- |
* | "No matching language" |
*
* @param {Editor_Code_Language_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_code_language_empty = /** @type {((inputs?: Editor_Code_Language_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Code_Language_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_code_language_empty(inputs)
	return zh_editor_code_language_empty(inputs)
});