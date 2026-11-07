/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Endpoint_Field_UrlInputs */

const zh_settings_webhook_endpoint_field_url = /** @type {(inputs: Settings_Webhook_Endpoint_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL`)
};

const en_settings_webhook_endpoint_field_url = /** @type {(inputs: Settings_Webhook_Endpoint_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL`)
};

/**
* | output |
* | --- |
* | "URL" |
*
* @param {Settings_Webhook_Endpoint_Field_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_endpoint_field_url = /** @type {((inputs?: Settings_Webhook_Endpoint_Field_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Endpoint_Field_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_endpoint_field_url(inputs)
	return zh_settings_webhook_endpoint_field_url(inputs)
});