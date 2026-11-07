/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown>, statusText: NonNullable<unknown> }} Settings_Webhook_Delivery_FailedInputs */

const zh_settings_webhook_delivery_failed = /** @type {(inputs: Settings_Webhook_Delivery_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Webhook 投递失败: ${i?.status} ${i?.statusText}`)
};

const en_settings_webhook_delivery_failed = /** @type {(inputs: Settings_Webhook_Delivery_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Webhook delivery failed: ${i?.status} ${i?.statusText}`)
};

/**
* | output |
* | --- |
* | "Webhook delivery failed: {status} {statusText}" |
*
* @param {Settings_Webhook_Delivery_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_delivery_failed = /** @type {((inputs: Settings_Webhook_Delivery_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Delivery_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_delivery_failed(inputs)
	return zh_settings_webhook_delivery_failed(inputs)
});