/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Friend_Link_Rejected_BodyInputs */

const zh_email_friend_link_rejected_body = /** @type {(inputs: Email_Friend_Link_Rejected_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`很抱歉，您的站点 ${i?.siteName} 的友链申请未通过审核。`)
};

const en_email_friend_link_rejected_body = /** @type {(inputs: Email_Friend_Link_Rejected_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sorry, your site ${i?.siteName} was not approved for our friend links.`)
};

/**
* | output |
* | --- |
* | "Sorry, your site {siteName} was not approved for our friend links." |
*
* @param {Email_Friend_Link_Rejected_BodyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_rejected_body = /** @type {((inputs: Email_Friend_Link_Rejected_BodyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Rejected_BodyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_rejected_body(inputs)
	return zh_email_friend_link_rejected_body(inputs)
});