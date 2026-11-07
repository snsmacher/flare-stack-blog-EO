/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Test_Mail_BodyInputs */

const zh_settings_email_test_mail_body = /** @type {(inputs: Settings_Email_Test_Mail_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是一封测试邮件。`)
};

const en_settings_email_test_mail_body = /** @type {(inputs: Settings_Email_Test_Mail_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a test email.`)
};

/**
* | output |
* | --- |
* | "This is a test email." |
*
* @param {Settings_Email_Test_Mail_BodyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_test_mail_body = /** @type {((inputs?: Settings_Email_Test_Mail_BodyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Test_Mail_BodyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_test_mail_body(inputs)
	return zh_settings_email_test_mail_body(inputs)
});