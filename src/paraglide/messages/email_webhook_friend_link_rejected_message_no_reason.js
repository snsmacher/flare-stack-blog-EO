/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs */

const zh_email_webhook_friend_link_rejected_message_no_reason = /** @type {(inputs: Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} 的友链申请未通过。`)
};

const en_email_webhook_friend_link_rejected_message_no_reason = /** @type {(inputs: Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} friend link request was rejected.`)
};

/**
* | output |
* | --- |
* | "{siteName} friend link request was rejected." |
*
* @param {Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_friend_link_rejected_message_no_reason = /** @type {((inputs: Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Friend_Link_Rejected_Message_No_ReasonInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_friend_link_rejected_message_no_reason(inputs)
	return zh_email_webhook_friend_link_rejected_message_no_reason(inputs)
});