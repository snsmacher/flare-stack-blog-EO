/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Test_Status_SuccessInputs */

const zh_settings_email_test_status_success = /** @type {(inputs: Settings_Email_Test_Status_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务连接正常`)
};

const en_settings_email_test_status_success = /** @type {(inputs: Settings_Email_Test_Status_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connected successfully`)
};

/**
* | output |
* | --- |
* | "Connected successfully" |
*
* @param {Settings_Email_Test_Status_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_test_status_success = /** @type {((inputs?: Settings_Email_Test_Status_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Test_Status_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_test_status_success(inputs)
	return zh_settings_email_test_status_success(inputs)
});