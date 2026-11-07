/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown>, statusText: NonNullable<unknown>, detail: NonNullable<unknown> }} Settings_Webhook_Delivery_Failed_DetailInputs */

const zh_settings_webhook_delivery_failed_detail = /** @type {(inputs: Settings_Webhook_Delivery_Failed_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Webhook 投递失败: ${i?.status} ${i?.statusText} - ${i?.detail}`)
};

const en_settings_webhook_delivery_failed_detail = /** @type {(inputs: Settings_Webhook_Delivery_Failed_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Webhook delivery failed: ${i?.status} ${i?.statusText} - ${i?.detail}`)
};

/**
* | output |
* | --- |
* | "Webhook delivery failed: {status} {statusText} - {detail}" |
*
* @param {Settings_Webhook_Delivery_Failed_DetailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_delivery_failed_detail = /** @type {((inputs: Settings_Webhook_Delivery_Failed_DetailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Delivery_Failed_DetailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_delivery_failed_detail(inputs)
	return zh_settings_webhook_delivery_failed_detail(inputs)
});