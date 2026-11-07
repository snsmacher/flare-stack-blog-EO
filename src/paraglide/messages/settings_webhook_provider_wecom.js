/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Provider_WecomInputs */

const zh_settings_webhook_provider_wecom = /** @type {(inputs: Settings_Webhook_Provider_WecomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`企业微信`)
};

const en_settings_webhook_provider_wecom = /** @type {(inputs: Settings_Webhook_Provider_WecomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`WeCom`)
};

/**
* | output |
* | --- |
* | "WeCom" |
*
* @param {Settings_Webhook_Provider_WecomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_provider_wecom = /** @type {((inputs?: Settings_Webhook_Provider_WecomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Provider_WecomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_provider_wecom(inputs)
	return zh_settings_webhook_provider_wecom(inputs)
});