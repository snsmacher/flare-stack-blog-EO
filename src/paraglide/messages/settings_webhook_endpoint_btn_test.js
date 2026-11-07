/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Endpoint_Btn_TestInputs */

const zh_settings_webhook_endpoint_btn_test = /** @type {(inputs: Settings_Webhook_Endpoint_Btn_TestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送测试`)
};

const en_settings_webhook_endpoint_btn_test = /** @type {(inputs: Settings_Webhook_Endpoint_Btn_TestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test`)
};

/**
* | output |
* | --- |
* | "Test" |
*
* @param {Settings_Webhook_Endpoint_Btn_TestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_endpoint_btn_test = /** @type {((inputs?: Settings_Webhook_Endpoint_Btn_TestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Endpoint_Btn_TestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_endpoint_btn_test(inputs)
	return zh_settings_webhook_endpoint_btn_test(inputs)
});