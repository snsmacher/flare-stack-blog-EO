/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Rejected_FollowupInputs */

const zh_email_friend_link_rejected_followup = /** @type {(inputs: Email_Friend_Link_Rejected_FollowupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如有疑问，欢迎重新提交申请。`)
};

const en_email_friend_link_rejected_followup = /** @type {(inputs: Email_Friend_Link_Rejected_FollowupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you have questions, feel free to submit again.`)
};

/**
* | output |
* | --- |
* | "If you have questions, feel free to submit again." |
*
* @param {Email_Friend_Link_Rejected_FollowupInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_rejected_followup = /** @type {((inputs?: Email_Friend_Link_Rejected_FollowupInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Rejected_FollowupInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_rejected_followup(inputs)
	return zh_email_friend_link_rejected_followup(inputs)
});