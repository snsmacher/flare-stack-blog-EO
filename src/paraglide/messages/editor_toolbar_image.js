/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_ImageInputs */

const zh_editor_toolbar_image = /** @type {(inputs: Editor_Toolbar_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入图片`)
};

const en_editor_toolbar_image = /** @type {(inputs: Editor_Toolbar_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert Image`)
};

/**
* | output |
* | --- |
* | "Insert Image" |
*
* @param {Editor_Toolbar_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_image = /** @type {((inputs?: Editor_Toolbar_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_image(inputs)
	return zh_editor_toolbar_image(inputs)
});