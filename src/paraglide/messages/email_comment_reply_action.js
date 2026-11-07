/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Reply_ActionInputs */

const zh_email_comment_reply_action = /** @type {(inputs: Email_Comment_Reply_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看完整回复`)
};

const en_email_comment_reply_action = /** @type {(inputs: Email_Comment_Reply_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View Full Reply`)
};

/**
* | output |
* | --- |
* | "View Full Reply" |
*
* @param {Email_Comment_Reply_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_action = /** @type {((inputs?: Email_Comment_Reply_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_action(inputs)
	return zh_email_comment_reply_action(inputs)
});