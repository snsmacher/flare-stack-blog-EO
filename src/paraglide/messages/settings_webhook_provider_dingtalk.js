/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Provider_DingtalkInputs */

const zh_settings_webhook_provider_dingtalk = /** @type {(inputs: Settings_Webhook_Provider_DingtalkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`钉钉`)
};

const en_settings_webhook_provider_dingtalk = /** @type {(inputs: Settings_Webhook_Provider_DingtalkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DingTalk`)
};

/**
* | output |
* | --- |
* | "DingTalk" |
*
* @param {Settings_Webhook_Provider_DingtalkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_provider_dingtalk = /** @type {((inputs?: Settings_Webhook_Provider_DingtalkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Provider_DingtalkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_provider_dingtalk(inputs)
	return zh_settings_webhook_provider_dingtalk(inputs)
});