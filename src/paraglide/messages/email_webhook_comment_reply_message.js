/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ replierName: NonNullable<unknown>, postTitle: NonNullable<unknown>, replyPreview: NonNullable<unknown>, commentUrl: NonNullable<unknown> }} Email_Webhook_Comment_Reply_MessageInputs */

const zh_email_webhook_comment_reply_message = /** @type {(inputs: Email_Webhook_Comment_Reply_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} 回复了《${i?.postTitle}》下的评论：${i?.replyPreview} ${i?.commentUrl}`)
};

const en_email_webhook_comment_reply_message = /** @type {(inputs: Email_Webhook_Comment_Reply_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} replied to a comment on "${i?.postTitle}": ${i?.replyPreview} ${i?.commentUrl}`)
};

/**
* | output |
* | --- |
* | "{replierName} replied to a comment on \"{postTitle}\": {replyPreview} {commentUrl}" |
*
* @param {Email_Webhook_Comment_Reply_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_comment_reply_message = /** @type {((inputs: Email_Webhook_Comment_Reply_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Comment_Reply_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_comment_reply_message(inputs)
	return zh_email_webhook_comment_reply_message(inputs)
});