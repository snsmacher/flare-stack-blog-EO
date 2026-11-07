/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Test_Btn_SendInputs */

const zh_settings_email_test_btn_send = /** @type {(inputs: Settings_Email_Test_Btn_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送测试邮件`)
};

const en_settings_email_test_btn_send = /** @type {(inputs: Settings_Email_Test_Btn_SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send Test Email`)
};

/**
* | output |
* | --- |
* | "Send Test Email" |
*
* @param {Settings_Email_Test_Btn_SendInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_test_btn_send = /** @type {((inputs?: Settings_Email_Test_Btn_SendInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Test_Btn_SendInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_test_btn_send(inputs)
	return zh_settings_email_test_btn_send(inputs)
});