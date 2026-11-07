/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Delete_ErrorInputs */

const zh_comments_toast_delete_error = /** @type {(inputs: Comments_Toast_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败: 未知错误`)
};

const en_comments_toast_delete_error = /** @type {(inputs: Comments_Toast_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete: Unknown error`)
};

/**
* | output |
* | --- |
* | "Failed to delete: Unknown error" |
*
* @param {Comments_Toast_Delete_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_delete_error = /** @type {((inputs?: Comments_Toast_Delete_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Delete_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_delete_error(inputs)
	return zh_comments_toast_delete_error(inputs)
});