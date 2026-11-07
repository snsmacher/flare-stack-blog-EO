/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Deleted_RefreshInputs */

const zh_comments_toast_deleted_refresh = /** @type {(inputs: Comments_Toast_Deleted_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该评论已被删除，请刷新页面`)
};

const en_comments_toast_deleted_refresh = /** @type {(inputs: Comments_Toast_Deleted_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment was deleted, please refresh`)
};

/**
* | output |
* | --- |
* | "Comment was deleted, please refresh" |
*
* @param {Comments_Toast_Deleted_RefreshInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_deleted_refresh = /** @type {((inputs?: Comments_Toast_Deleted_RefreshInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Deleted_RefreshInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_deleted_refresh(inputs)
	return zh_comments_toast_deleted_refresh(inputs)
});