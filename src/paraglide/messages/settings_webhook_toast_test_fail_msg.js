/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Settings_Webhook_Toast_Test_Fail_MsgInputs */

const zh_settings_webhook_toast_test_fail_msg = /** @type {(inputs: Settings_Webhook_Toast_Test_Fail_MsgInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`测试请求发送失败: ${i?.message}`)
};

const en_settings_webhook_toast_test_fail_msg = /** @type {(inputs: Settings_Webhook_Toast_Test_Fail_MsgInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed: ${i?.message}`)
};

/**
* | output |
* | --- |
* | "Failed: {message}" |
*
* @param {Settings_Webhook_Toast_Test_Fail_MsgInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_toast_test_fail_msg = /** @type {((inputs: Settings_Webhook_Toast_Test_Fail_MsgInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Toast_Test_Fail_MsgInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_toast_test_fail_msg(inputs)
	return zh_settings_webhook_toast_test_fail_msg(inputs)
});