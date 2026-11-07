/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ submitterName: NonNullable<unknown>, siteName: NonNullable<unknown>, siteUrl: NonNullable<unknown> }} Email_Webhook_Friend_Link_Submitted_MessageInputs */

const zh_email_webhook_friend_link_submitted_message = /** @type {(inputs: Email_Webhook_Friend_Link_Submitted_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} 提交了友链申请：${i?.siteName}（${i?.siteUrl}）`)
};

const en_email_webhook_friend_link_submitted_message = /** @type {(inputs: Email_Webhook_Friend_Link_Submitted_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} submitted a friend link request: ${i?.siteName} (${i?.siteUrl})`)
};

/**
* | output |
* | --- |
* | "{submitterName} submitted a friend link request: {siteName} ({siteUrl})" |
*
* @param {Email_Webhook_Friend_Link_Submitted_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_friend_link_submitted_message = /** @type {((inputs: Email_Webhook_Friend_Link_Submitted_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Friend_Link_Submitted_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_friend_link_submitted_message(inputs)
	return zh_email_webhook_friend_link_submitted_message(inputs)
});