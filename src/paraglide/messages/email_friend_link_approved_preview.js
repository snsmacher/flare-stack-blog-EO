/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Friend_Link_Approved_PreviewInputs */

const zh_email_friend_link_approved_preview = /** @type {(inputs: Email_Friend_Link_Approved_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`您的友链申请（${i?.siteName}）已通过`)
};

const en_email_friend_link_approved_preview = /** @type {(inputs: Email_Friend_Link_Approved_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your friend link request (${i?.siteName}) was approved`)
};

/**
* | output |
* | --- |
* | "Your friend link request ({siteName}) was approved" |
*
* @param {Email_Friend_Link_Approved_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_approved_preview = /** @type {((inputs: Email_Friend_Link_Approved_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Approved_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_approved_preview(inputs)
	return zh_email_friend_link_approved_preview(inputs)
});