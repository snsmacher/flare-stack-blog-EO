/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Email_Notify_Desc_FuwariInputs */

const zh_profile_email_notify_desc_fuwari = /** @type {(inputs: Profile_Email_Notify_Desc_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人回复你的评论时，将通过邮件提醒你。`)
};

const en_profile_email_notify_desc_fuwari = /** @type {(inputs: Profile_Email_Notify_Desc_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receive email notifications when someone replies to your comments.`)
};

/**
* | output |
* | --- |
* | "Receive email notifications when someone replies to your comments." |
*
* @param {Profile_Email_Notify_Desc_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_email_notify_desc_fuwari = /** @type {((inputs?: Profile_Email_Notify_Desc_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Email_Notify_Desc_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_email_notify_desc_fuwari(inputs)
	return zh_profile_email_notify_desc_fuwari(inputs)
});