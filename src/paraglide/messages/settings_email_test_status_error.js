/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Test_Status_ErrorInputs */

const zh_settings_email_test_status_error = /** @type {(inputs: Settings_Email_Test_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接测试失败`)
};

const en_settings_email_test_status_error = /** @type {(inputs: Settings_Email_Test_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connection test failed`)
};

/**
* | output |
* | --- |
* | "Connection test failed" |
*
* @param {Settings_Email_Test_Status_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_test_status_error = /** @type {((inputs?: Settings_Email_Test_Status_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Test_Status_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_test_status_error(inputs)
	return zh_settings_email_test_status_error(inputs)
});