/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_ProviderInputs */

const zh_settings_webhook_provider = /** @type {(inputs: Settings_Webhook_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`推送渠道`)
};

const en_settings_webhook_provider = /** @type {(inputs: Settings_Webhook_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Settings_Webhook_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_provider = /** @type {((inputs?: Settings_Webhook_ProviderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_ProviderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_provider(inputs)
	return zh_settings_webhook_provider(inputs)
});