/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Upload_ChooseInputs */

const zh_editor_image_upload_choose = /** @type {(inputs: Editor_Image_Upload_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择本地图片`)
};

const en_editor_image_upload_choose = /** @type {(inputs: Editor_Image_Upload_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose an image file`)
};

/**
* | output |
* | --- |
* | "Choose an image file" |
*
* @param {Editor_Image_Upload_ChooseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_upload_choose = /** @type {((inputs?: Editor_Image_Upload_ChooseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Upload_ChooseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_upload_choose(inputs)
	return zh_editor_image_upload_choose(inputs)
});