/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ replierName: NonNullable<unknown>, postTitle: NonNullable<unknown> }} Email_Comment_Reply_PreviewInputs */

const zh_email_comment_reply_preview = /** @type {(inputs: Email_Comment_Reply_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} 回复了您在《${i?.postTitle}》下的评论`)
};

const en_email_comment_reply_preview = /** @type {(inputs: Email_Comment_Reply_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} replied to your comment on "${i?.postTitle}"`)
};

/**
* | output |
* | --- |
* | "{replierName} replied to your comment on \"{postTitle}\"" |
*
* @param {Email_Comment_Reply_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_preview = /** @type {((inputs: Email_Comment_Reply_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_preview(inputs)
	return zh_email_comment_reply_preview(inputs)
});