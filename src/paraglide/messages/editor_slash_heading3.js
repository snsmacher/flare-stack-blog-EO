/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_Heading3Inputs */

const zh_editor_slash_heading3 = /** @type {(inputs: Editor_Slash_Heading3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题 3`)
};

const en_editor_slash_heading3 = /** @type {(inputs: Editor_Slash_Heading3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heading 3`)
};

/**
* | output |
* | --- |
* | "Heading 3" |
*
* @param {Editor_Slash_Heading3Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_heading3 = /** @type {((inputs?: Editor_Slash_Heading3Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_Heading3Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_heading3(inputs)
	return zh_editor_slash_heading3(inputs)
});