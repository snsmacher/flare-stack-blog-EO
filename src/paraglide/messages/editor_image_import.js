/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_ImportInputs */

const zh_editor_image_import = /** @type {(inputs: Editor_Image_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入`)
};

const en_editor_image_import = /** @type {(inputs: Editor_Image_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import`)
};

/**
* | output |
* | --- |
* | "Import" |
*
* @param {Editor_Image_ImportInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_import = /** @type {((inputs?: Editor_Image_ImportInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_ImportInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_import(inputs)
	return zh_editor_image_import(inputs)
});