/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Provider_FeishuInputs */

const zh_settings_webhook_provider_feishu = /** @type {(inputs: Settings_Webhook_Provider_FeishuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`飞书`)
};

const en_settings_webhook_provider_feishu = /** @type {(inputs: Settings_Webhook_Provider_FeishuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feishu / Lark`)
};

/**
* | output |
* | --- |
* | "Feishu / Lark" |
*
* @param {Settings_Webhook_Provider_FeishuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_provider_feishu = /** @type {((inputs?: Settings_Webhook_Provider_FeishuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Provider_FeishuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_provider_feishu(inputs)
	return zh_settings_webhook_provider_feishu(inputs)
});