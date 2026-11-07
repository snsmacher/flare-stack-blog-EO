/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_Ntfy_UrlInputs */

const zh_settings_webhook_field_ntfy_url = /** @type {(inputs: Settings_Webhook_Field_Ntfy_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题地址`)
};

const en_settings_webhook_field_ntfy_url = /** @type {(inputs: Settings_Webhook_Field_Ntfy_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topic URL`)
};

/**
* | output |
* | --- |
* | "Topic URL" |
*
* @param {Settings_Webhook_Field_Ntfy_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_ntfy_url = /** @type {((inputs?: Settings_Webhook_Field_Ntfy_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_Ntfy_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_ntfy_url(inputs)
	return zh_settings_webhook_field_ntfy_url(inputs)
});