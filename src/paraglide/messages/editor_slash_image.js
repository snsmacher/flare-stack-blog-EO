/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_ImageInputs */

const zh_editor_slash_image = /** @type {(inputs: Editor_Slash_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片`)
};

const en_editor_slash_image = /** @type {(inputs: Editor_Slash_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image`)
};

/**
* | output |
* | --- |
* | "Image" |
*
* @param {Editor_Slash_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_image = /** @type {((inputs?: Editor_Slash_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_image(inputs)
	return zh_editor_slash_image(inputs)
});