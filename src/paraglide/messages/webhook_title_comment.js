/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Title_CommentInputs */

const zh_webhook_title_comment = /** @type {(inputs: Webhook_Title_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客通知 · 新评论`)
};

const en_webhook_title_comment = /** @type {(inputs: Webhook_Title_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog notification · New comment`)
};

/**
* | output |
* | --- |
* | "Blog notification · New comment" |
*
* @param {Webhook_Title_CommentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_title_comment = /** @type {((inputs?: Webhook_Title_CommentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Title_CommentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_title_comment(inputs)
	return zh_webhook_title_comment(inputs)
});