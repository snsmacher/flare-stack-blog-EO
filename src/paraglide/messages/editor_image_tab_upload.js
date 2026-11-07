/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Image_Tab_UploadInputs */

const zh_editor_image_tab_upload = /** @type {(inputs: Editor_Image_Tab_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const en_editor_image_tab_upload = /** @type {(inputs: Editor_Image_Tab_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {Editor_Image_Tab_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_image_tab_upload = /** @type {((inputs?: Editor_Image_Tab_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Image_Tab_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_image_tab_upload(inputs)
	return zh_editor_image_tab_upload(inputs)
});