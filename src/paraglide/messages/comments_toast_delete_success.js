/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Delete_SuccessInputs */

const zh_comments_toast_delete_success = /** @type {(inputs: Comments_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已删除`)
};

const en_comments_toast_delete_success = /** @type {(inputs: Comments_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment deleted`)
};

/**
* | output |
* | --- |
* | "Comment deleted" |
*
* @param {Comments_Toast_Delete_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_delete_success = /** @type {((inputs?: Comments_Toast_Delete_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Delete_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_delete_success(inputs)
	return zh_comments_toast_delete_success(inputs)
});