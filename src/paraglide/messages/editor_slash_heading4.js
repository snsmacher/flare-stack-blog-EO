/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_Heading4Inputs */

const zh_editor_slash_heading4 = /** @type {(inputs: Editor_Slash_Heading4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题 4`)
};

const en_editor_slash_heading4 = /** @type {(inputs: Editor_Slash_Heading4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heading 4`)
};

/**
* | output |
* | --- |
* | "Heading 4" |
*
* @param {Editor_Slash_Heading4Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_heading4 = /** @type {((inputs?: Editor_Slash_Heading4Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_Heading4Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_heading4(inputs)
	return zh_editor_slash_heading4(inputs)
});