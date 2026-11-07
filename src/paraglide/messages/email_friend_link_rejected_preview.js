/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Friend_Link_Rejected_PreviewInputs */

const zh_email_friend_link_rejected_preview = /** @type {(inputs: Email_Friend_Link_Rejected_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`您的友链申请（${i?.siteName}）未通过`)
};

const en_email_friend_link_rejected_preview = /** @type {(inputs: Email_Friend_Link_Rejected_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your friend link request (${i?.siteName}) was not approved`)
};

/**
* | output |
* | --- |
* | "Your friend link request ({siteName}) was not approved" |
*
* @param {Email_Friend_Link_Rejected_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_rejected_preview = /** @type {((inputs: Email_Friend_Link_Rejected_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Rejected_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_rejected_preview(inputs)
	return zh_email_friend_link_rejected_preview(inputs)
});