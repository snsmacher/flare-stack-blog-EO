/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Toast_Test_FailInputs */

const zh_settings_webhook_toast_test_fail = /** @type {(inputs: Settings_Webhook_Toast_Test_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试请求发送失败`)
};

const en_settings_webhook_toast_test_fail = /** @type {(inputs: Settings_Webhook_Toast_Test_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to send test request`)
};

/**
* | output |
* | --- |
* | "Failed to send test request" |
*
* @param {Settings_Webhook_Toast_Test_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_toast_test_fail = /** @type {((inputs?: Settings_Webhook_Toast_Test_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Toast_Test_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_toast_test_fail(inputs)
	return zh_settings_webhook_toast_test_fail(inputs)
});