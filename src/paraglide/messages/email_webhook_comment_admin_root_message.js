/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ commenterName: NonNullable<unknown>, postTitle: NonNullable<unknown>, commentPreview: NonNullable<unknown>, commentUrl: NonNullable<unknown> }} Email_Webhook_Comment_Admin_Root_MessageInputs */

const zh_email_webhook_comment_admin_root_message = /** @type {(inputs: Email_Webhook_Comment_Admin_Root_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} 在《${i?.postTitle}》下发表了评论：${i?.commentPreview} ${i?.commentUrl}`)
};

const en_email_webhook_comment_admin_root_message = /** @type {(inputs: Email_Webhook_Comment_Admin_Root_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} left a comment on "${i?.postTitle}": ${i?.commentPreview} ${i?.commentUrl}`)
};

/**
* | output |
* | --- |
* | "{commenterName} left a comment on \"{postTitle}\": {commentPreview} {commentUrl}" |
*
* @param {Email_Webhook_Comment_Admin_Root_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_webhook_comment_admin_root_message = /** @type {((inputs: Email_Webhook_Comment_Admin_Root_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Webhook_Comment_Admin_Root_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_webhook_comment_admin_root_message(inputs)
	return zh_email_webhook_comment_admin_root_message(inputs)
});