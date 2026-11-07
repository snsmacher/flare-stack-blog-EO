/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown>, rejectionReason: NonNullable<unknown> }} Email_Webhook_Friend_Link_Rejected_MessageInputs */

const zh_email_webhook_friend_link_rejected_message = /** @type {(inputs: Email_Webhook_Friend_Link_Rejected_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} 的友链申请未通过：${i?.rejectionReason}`)
};

const en_email_webhook_friend_link_rejected_message = /** @type {(inputs: Email_Webhook_Friend_Link_Rejected_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} friend link request was rejected: ${i?.rejectionReason}`)
};

/**
* | output |
* | --- |
* | "{siteName} friend link request was rejected: {rejectionReason}" |
*
* @param {Email_Webhook_Friend_Link_Rejected_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_friend_link_rejected_message = /** @type {((inputs: Email_Webhook_Friend_Link_Rejected_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Friend_Link_Rejected_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_friend_link_rejected_message(inputs)
	return zh_email_webhook_friend_link_rejected_message(inputs)
});