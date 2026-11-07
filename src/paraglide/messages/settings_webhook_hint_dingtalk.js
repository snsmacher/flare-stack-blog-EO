/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_DingtalkInputs */

const zh_settings_webhook_hint_dingtalk = /** @type {(inputs: Settings_Webhook_Hint_DingtalkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`群设置 → 机器人 → 添加机器人 → 自定义，安全设置选「自定义关键词」并填写「博客通知」，然后复制 Webhook 地址。`)
};

const en_settings_webhook_hint_dingtalk = /** @type {(inputs: Settings_Webhook_Hint_DingtalkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group settings → Bots → Add bot → Custom. Choose keyword security with "Blog notification", then copy its Webhook URL.`)
};

/**
* | output |
* | --- |
* | "Group settings → Bots → Add bot → Custom. Choose keyword security with \"Blog notification\", then copy its Webhook URL." |
*
* @param {Settings_Webhook_Hint_DingtalkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_dingtalk = /** @type {((inputs?: Settings_Webhook_Hint_DingtalkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_DingtalkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_dingtalk(inputs)
	return zh_settings_webhook_hint_dingtalk(inputs)
});