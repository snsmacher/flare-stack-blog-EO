/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Reply_TitleInputs */

const zh_email_comment_reply_title = /** @type {(inputs: Email_Comment_Reply_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收到新的回复`)
};

const en_email_comment_reply_title = /** @type {(inputs: Email_Comment_Reply_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New reply received`)
};

/**
* | output |
* | --- |
* | "New reply received" |
*
* @param {Email_Comment_Reply_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_title = /** @type {((inputs?: Email_Comment_Reply_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_title(inputs)
	return zh_email_comment_reply_title(inputs)
});