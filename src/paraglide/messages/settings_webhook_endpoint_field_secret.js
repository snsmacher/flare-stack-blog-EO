/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Endpoint_Field_SecretInputs */

const zh_settings_webhook_endpoint_field_secret = /** @type {(inputs: Settings_Webhook_Endpoint_Field_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`签名密钥`)
};

const en_settings_webhook_endpoint_field_secret = /** @type {(inputs: Settings_Webhook_Endpoint_Field_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signing Secret`)
};

/**
* | output |
* | --- |
* | "Signing Secret" |
*
* @param {Settings_Webhook_Endpoint_Field_SecretInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_endpoint_field_secret = /** @type {((inputs?: Settings_Webhook_Endpoint_Field_SecretInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Endpoint_Field_SecretInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_endpoint_field_secret(inputs)
	return zh_settings_webhook_endpoint_field_secret(inputs)
});