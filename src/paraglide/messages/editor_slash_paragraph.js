/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_ParagraphInputs */

const zh_editor_slash_paragraph = /** @type {(inputs: Editor_Slash_ParagraphInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正文`)
};

const en_editor_slash_paragraph = /** @type {(inputs: Editor_Slash_ParagraphInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text`)
};

/**
* | output |
* | --- |
* | "Text" |
*
* @param {Editor_Slash_ParagraphInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_paragraph = /** @type {((inputs?: Editor_Slash_ParagraphInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_ParagraphInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_paragraph(inputs)
	return zh_editor_slash_paragraph(inputs)
});