/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Webhook_Friend_Link_Approved_MessageInputs */

const zh_email_webhook_friend_link_approved_message = /** @type {(inputs: Email_Webhook_Friend_Link_Approved_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} 的友链申请已通过审核。`)
};

const en_email_webhook_friend_link_approved_message = /** @type {(inputs: Email_Webhook_Friend_Link_Approved_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteName} friend link request was approved.`)
};

/**
* | output |
* | --- |
* | "{siteName} friend link request was approved." |
*
* @param {Email_Webhook_Friend_Link_Approved_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_friend_link_approved_message = /** @type {((inputs: Email_Webhook_Friend_Link_Approved_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Friend_Link_Approved_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_friend_link_approved_message(inputs)
	return zh_email_webhook_friend_link_approved_message(inputs)
});