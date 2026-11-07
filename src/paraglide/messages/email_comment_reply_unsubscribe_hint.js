/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Reply_Unsubscribe_HintInputs */

const zh_email_comment_reply_unsubscribe_hint = /** @type {(inputs: Email_Comment_Reply_Unsubscribe_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不想再接收此类通知？`)
};

const en_email_comment_reply_unsubscribe_hint = /** @type {(inputs: Email_Comment_Reply_Unsubscribe_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don't want to receive these notifications anymore?`)
};

/**
* | output |
* | --- |
* | "Don't want to receive these notifications anymore?" |
*
* @param {Email_Comment_Reply_Unsubscribe_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_unsubscribe_hint = /** @type {((inputs?: Email_Comment_Reply_Unsubscribe_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_Unsubscribe_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_unsubscribe_hint(inputs)
	return zh_email_comment_reply_unsubscribe_hint(inputs)
});