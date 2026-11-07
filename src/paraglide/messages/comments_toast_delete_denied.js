/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Delete_DeniedInputs */

const zh_comments_toast_delete_denied = /** @type {(inputs: Comments_Toast_Delete_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败: 无权限删除该评论`)
};

const en_comments_toast_delete_denied = /** @type {(inputs: Comments_Toast_Delete_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete: Permission denied`)
};

/**
* | output |
* | --- |
* | "Failed to delete: Permission denied" |
*
* @param {Comments_Toast_Delete_DeniedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_delete_denied = /** @type {((inputs?: Comments_Toast_Delete_DeniedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Delete_DeniedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_delete_denied(inputs)
	return zh_comments_toast_delete_denied(inputs)
});