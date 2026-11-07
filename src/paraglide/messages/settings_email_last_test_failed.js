/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown>, error: NonNullable<unknown> }} Settings_Email_Last_Test_FailedInputs */

const zh_settings_email_last_test_failed = /** @type {(inputs: Settings_Email_Last_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上次测试失败：${i?.time}，${i?.error}`)
};

const en_settings_email_last_test_failed = /** @type {(inputs: Settings_Email_Last_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last test failed: ${i?.time}. ${i?.error}`)
};

/**
* | output |
* | --- |
* | "Last test failed: {time}. {error}" |
*
* @param {Settings_Email_Last_Test_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_last_test_failed = /** @type {((inputs: Settings_Email_Last_Test_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Last_Test_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_last_test_failed(inputs)
	return zh_settings_email_last_test_failed(inputs)
});