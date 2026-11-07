/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Delete_DescInputs */

const zh_comments_delete_desc = /** @type {(inputs: Comments_Delete_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确定要删除这条评论吗？删除后该条评论将显示为「该评论已被删除」。`)
};

const en_comments_delete_desc = /** @type {(inputs: Comments_Delete_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to delete this comment? It will appear as 'This comment has been deleted'.`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to delete this comment? It will appear as 'This comment has been deleted'." |
*
* @param {Comments_Delete_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_delete_desc = /** @type {((inputs?: Comments_Delete_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Delete_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_delete_desc(inputs)
	return zh_comments_delete_desc(inputs)
});