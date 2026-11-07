/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Picker_TitleInputs */

const zh_editor_image_picker_title = /** @type {(inputs: Editor_Image_Picker_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择图片`)
};

const en_editor_image_picker_title = /** @type {(inputs: Editor_Image_Picker_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose image`)
};

/**
* | output |
* | --- |
* | "Choose image" |
*
* @param {Editor_Image_Picker_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_picker_title = /** @type {((inputs?: Editor_Image_Picker_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Picker_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_picker_title(inputs)
	return zh_editor_image_picker_title(inputs)
});