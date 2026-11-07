/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ replierName: NonNullable<unknown> }} Email_Comment_Reply_IntroInputs */

const zh_email_comment_reply_intro = /** @type {(inputs: Email_Comment_Reply_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} 回复了您的评论：`)
};

const en_email_comment_reply_intro = /** @type {(inputs: Email_Comment_Reply_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.replierName} replied to your comment:`)
};

/**
* | output |
* | --- |
* | "{replierName} replied to your comment:" |
*
* @param {Email_Comment_Reply_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_intro = /** @type {((inputs: Email_Comment_Reply_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_intro(inputs)
	return zh_email_comment_reply_intro(inputs)
});