/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_BlockquoteInputs */

const zh_editor_slash_blockquote = /** @type {(inputs: Editor_Slash_BlockquoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引用`)
};

const en_editor_slash_blockquote = /** @type {(inputs: Editor_Slash_BlockquoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quote`)
};

/**
* | output |
* | --- |
* | "Quote" |
*
* @param {Editor_Slash_BlockquoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_blockquote = /** @type {((inputs?: Editor_Slash_BlockquoteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_BlockquoteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_blockquote(inputs)
	return zh_editor_slash_blockquote(inputs)
});