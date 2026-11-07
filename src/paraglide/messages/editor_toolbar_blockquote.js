/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_BlockquoteInputs */

const zh_editor_toolbar_blockquote = /** @type {(inputs: Editor_Toolbar_BlockquoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引用`)
};

const en_editor_toolbar_blockquote = /** @type {(inputs: Editor_Toolbar_BlockquoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blockquote`)
};

/**
* | output |
* | --- |
* | "Blockquote" |
*
* @param {Editor_Toolbar_BlockquoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_blockquote = /** @type {((inputs?: Editor_Toolbar_BlockquoteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_BlockquoteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_blockquote(inputs)
	return zh_editor_toolbar_blockquote(inputs)
});