/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Image_UploadingInputs */

const zh_editor_action_image_uploading = /** @type {(inputs: Editor_Action_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片还在上传，等完成后再发布。`)
};

const en_editor_action_image_uploading = /** @type {(inputs: Editor_Action_Image_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images are still uploading. Wait until they finish, then publish.`)
};

/**
* | output |
* | --- |
* | "Images are still uploading. Wait until they finish, then publish." |
*
* @param {Editor_Action_Image_UploadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_image_uploading = /** @type {((inputs?: Editor_Action_Image_UploadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Image_UploadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_image_uploading(inputs)
	return zh_editor_action_image_uploading(inputs)
});