/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Settings_Email_Last_Test_VerifiedInputs */

const zh_settings_email_last_test_verified = /** @type {(inputs: Settings_Email_Last_Test_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上次测试通过：${i?.time}`)
};

const en_settings_email_last_test_verified = /** @type {(inputs: Settings_Email_Last_Test_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last test passed: ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Last test passed: {time}" |
*
* @param {Settings_Email_Last_Test_VerifiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_last_test_verified = /** @type {((inputs: Settings_Email_Last_Test_VerifiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Last_Test_VerifiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_last_test_verified(inputs)
	return zh_settings_email_last_test_verified(inputs)
});