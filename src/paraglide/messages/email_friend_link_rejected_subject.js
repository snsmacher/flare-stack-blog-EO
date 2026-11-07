/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteName: NonNullable<unknown> }} Email_Friend_Link_Rejected_SubjectInputs */

const zh_email_friend_link_rejected_subject = /** @type {(inputs: Email_Friend_Link_Rejected_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[友链审核结果] ${i?.siteName}`)
};

const en_email_friend_link_rejected_subject = /** @type {(inputs: Email_Friend_Link_Rejected_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[Friend Link Result] ${i?.siteName}`)
};

/**
* | output |
* | --- |
* | "[Friend Link Result] {siteName}" |
*
* @param {Email_Friend_Link_Rejected_SubjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_rejected_subject = /** @type {((inputs: Email_Friend_Link_Rejected_SubjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Rejected_SubjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_rejected_subject(inputs)
	return zh_email_friend_link_rejected_subject(inputs)
});