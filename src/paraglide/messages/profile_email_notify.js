/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Email_NotifyInputs */

const zh_profile_email_notify = /** @type {(inputs: Profile_Email_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮件通知`)
};

const en_profile_email_notify = /** @type {(inputs: Profile_Email_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email Notification`)
};

/**
* | output |
* | --- |
* | "Email Notification" |
*
* @param {Profile_Email_NotifyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_email_notify = /** @type {((inputs?: Profile_Email_NotifyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Email_NotifyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_email_notify(inputs)
	return zh_profile_email_notify(inputs)
});