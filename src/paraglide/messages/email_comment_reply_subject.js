/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ replierName: NonNullable<unknown>, postTitle: NonNullable<unknown> }} Email_Comment_Reply_SubjectInputs */

const zh_email_comment_reply_subject = /** @type {(inputs: Email_Comment_Reply_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[评论回复] ${i?.replierName} 回复了您在《${i?.postTitle}》的评论`)
};

const en_email_comment_reply_subject = /** @type {(inputs: Email_Comment_Reply_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[Comment Reply] ${i?.replierName} replied to your comment on "${i?.postTitle}"`)
};

/**
* | output |
* | --- |
* | "[Comment Reply] {replierName} replied to your comment on \"{postTitle}\"" |
*
* @param {Email_Comment_Reply_SubjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_subject = /** @type {((inputs: Email_Comment_Reply_SubjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_SubjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_subject(inputs)
	return zh_email_comment_reply_subject(inputs)
});