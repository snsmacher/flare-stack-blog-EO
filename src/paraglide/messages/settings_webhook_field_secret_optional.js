/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_Secret_OptionalInputs */

const zh_settings_webhook_field_secret_optional = /** @type {(inputs: Settings_Webhook_Field_Secret_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`签名密钥（可选）`)
};

const en_settings_webhook_field_secret_optional = /** @type {(inputs: Settings_Webhook_Field_Secret_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signing key (optional)`)
};

/**
* | output |
* | --- |
* | "Signing key (optional)" |
*
* @param {Settings_Webhook_Field_Secret_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_secret_optional = /** @type {((inputs?: Settings_Webhook_Field_Secret_OptionalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_Secret_OptionalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_secret_optional(inputs)
	return zh_settings_webhook_field_secret_optional(inputs)
});