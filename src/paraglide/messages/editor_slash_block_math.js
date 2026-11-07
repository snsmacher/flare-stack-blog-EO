/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_Block_MathInputs */

const zh_editor_slash_block_math = /** @type {(inputs: Editor_Slash_Block_MathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`块级公式`)
};

const en_editor_slash_block_math = /** @type {(inputs: Editor_Slash_Block_MathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Block formula`)
};

/**
* | output |
* | --- |
* | "Block formula" |
*
* @param {Editor_Slash_Block_MathInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_block_math = /** @type {((inputs?: Editor_Slash_Block_MathInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_Block_MathInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_block_math(inputs)
	return zh_editor_slash_block_math(inputs)
});