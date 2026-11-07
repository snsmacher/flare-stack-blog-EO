/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Reply_Unsubscribe_ActionInputs */

const zh_email_comment_reply_unsubscribe_action = /** @type {(inputs: Email_Comment_Reply_Unsubscribe_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键退订`)
};

const en_email_comment_reply_unsubscribe_action = /** @type {(inputs: Email_Comment_Reply_Unsubscribe_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe`)
};

/**
* | output |
* | --- |
* | "Unsubscribe" |
*
* @param {Email_Comment_Reply_Unsubscribe_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_reply_unsubscribe_action = /** @type {((inputs?: Email_Comment_Reply_Unsubscribe_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Reply_Unsubscribe_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_reply_unsubscribe_action(inputs)
	return zh_email_comment_reply_unsubscribe_action(inputs)
});