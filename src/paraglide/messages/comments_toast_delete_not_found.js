/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Delete_Not_FoundInputs */

const zh_comments_toast_delete_not_found = /** @type {(inputs: Comments_Toast_Delete_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败: 评论不存在或已删除`)
};

const en_comments_toast_delete_not_found = /** @type {(inputs: Comments_Toast_Delete_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete: Comment not found`)
};

/**
* | output |
* | --- |
* | "Failed to delete: Comment not found" |
*
* @param {Comments_Toast_Delete_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_delete_not_found = /** @type {((inputs?: Comments_Toast_Delete_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Delete_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_delete_not_found(inputs)
	return zh_comments_toast_delete_not_found(inputs)
});