/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_FeishuInputs */

const zh_settings_webhook_hint_feishu = /** @type {(inputs: Settings_Webhook_Hint_FeishuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`群设置 → 群机器人 → 添加机器人 → 自定义机器人，复制 Webhook 地址。如果开启「自定义关键词」，请填写「博客通知」。`)
};

const en_settings_webhook_hint_feishu = /** @type {(inputs: Settings_Webhook_Hint_FeishuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group settings → Bots → Add bot → Custom bot, then copy its Webhook URL. If you turn on keyword security, use "Blog notification".`)
};

/**
* | output |
* | --- |
* | "Group settings → Bots → Add bot → Custom bot, then copy its Webhook URL. If you turn on keyword security, use \"Blog notification\"." |
*
* @param {Settings_Webhook_Hint_FeishuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_feishu = /** @type {((inputs?: Settings_Webhook_Hint_FeishuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_FeishuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_feishu(inputs)
	return zh_settings_webhook_hint_feishu(inputs)
});