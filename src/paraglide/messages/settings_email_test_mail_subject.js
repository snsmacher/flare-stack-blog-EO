/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Test_Mail_SubjectInputs */

const zh_settings_email_test_mail_subject = /** @type {(inputs: Settings_Email_Test_Mail_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试连接`)
};

const en_settings_email_test_mail_subject = /** @type {(inputs: Settings_Email_Test_Mail_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test Connection`)
};

/**
* | output |
* | --- |
* | "Test Connection" |
*
* @param {Settings_Email_Test_Mail_SubjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_test_mail_subject = /** @type {((inputs?: Settings_Email_Test_Mail_SubjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Test_Mail_SubjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_test_mail_subject(inputs)
	return zh_settings_email_test_mail_subject(inputs)
});