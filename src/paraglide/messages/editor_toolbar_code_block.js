/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_Code_BlockInputs */

const zh_editor_toolbar_code_block = /** @type {(inputs: Editor_Toolbar_Code_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代码块`)
};

const en_editor_toolbar_code_block = /** @type {(inputs: Editor_Toolbar_Code_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code Block`)
};

/**
* | output |
* | --- |
* | "Code Block" |
*
* @param {Editor_Toolbar_Code_BlockInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_code_block = /** @type {((inputs?: Editor_Toolbar_Code_BlockInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_Code_BlockInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_code_block(inputs)
	return zh_editor_toolbar_code_block(inputs)
});