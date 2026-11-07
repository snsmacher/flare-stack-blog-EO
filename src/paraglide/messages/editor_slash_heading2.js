/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_Heading2Inputs */

const zh_editor_slash_heading2 = /** @type {(inputs: Editor_Slash_Heading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题 2`)
};

const en_editor_slash_heading2 = /** @type {(inputs: Editor_Slash_Heading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heading 2`)
};

/**
* | output |
* | --- |
* | "Heading 2" |
*
* @param {Editor_Slash_Heading2Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_heading2 = /** @type {((inputs?: Editor_Slash_Heading2Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_Heading2Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_heading2(inputs)
	return zh_editor_slash_heading2(inputs)
});