/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Send_Failed_Keep_DraftInputs */

const zh_comments_send_failed_keep_draft = /** @type {(inputs: Comments_Send_Failed_Keep_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送未成功，草稿已保留，请稍后重试。`)
};

const en_comments_send_failed_keep_draft = /** @type {(inputs: Comments_Send_Failed_Keep_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not send your comment. Your draft is preserved; please try again.`)
};

/**
* | output |
* | --- |
* | "Could not send your comment. Your draft is preserved; please try again." |
*
* @param {Comments_Send_Failed_Keep_DraftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_send_failed_keep_draft = /** @type {((inputs?: Comments_Send_Failed_Keep_DraftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Send_Failed_Keep_DraftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_send_failed_keep_draft(inputs)
	return zh_comments_send_failed_keep_draft(inputs)
});