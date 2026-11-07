/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Toast_Test_SentInputs */

const zh_settings_webhook_toast_test_sent = /** @type {(inputs: Settings_Webhook_Toast_Test_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试请求已发送`)
};

const en_settings_webhook_toast_test_sent = /** @type {(inputs: Settings_Webhook_Toast_Test_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test request sent`)
};

/**
* | output |
* | --- |
* | "Test request sent" |
*
* @param {Settings_Webhook_Toast_Test_SentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_toast_test_sent = /** @type {((inputs?: Settings_Webhook_Toast_Test_SentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Toast_Test_SentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_toast_test_sent(inputs)
	return zh_settings_webhook_toast_test_sent(inputs)
});