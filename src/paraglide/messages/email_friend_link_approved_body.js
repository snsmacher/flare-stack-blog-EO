/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Friend_Link_Approved_BodyInputs */

const zh_email_friend_link_approved_body = /** @type {(inputs: Email_Friend_Link_Approved_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`恭喜！您的站点 ${i?.siteName} 的友链申请已通过审核。`)
};

const en_email_friend_link_approved_body = /** @type {(inputs: Email_Friend_Link_Approved_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good news! Your site ${i?.siteName} has been approved for our friend links.`)
};

/**
* | output |
* | --- |
* | "Good news! Your site {siteName} has been approved for our friend links." |
*
* @param {Email_Friend_Link_Approved_BodyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_approved_body = /** @type {((inputs: Email_Friend_Link_Approved_BodyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Approved_BodyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_approved_body(inputs)
	return zh_email_friend_link_approved_body(inputs)
});