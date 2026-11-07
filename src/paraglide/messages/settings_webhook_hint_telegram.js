/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_TelegramInputs */

const zh_settings_webhook_hint_telegram = /** @type {(inputs: Settings_Webhook_Hint_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Telegram 里找 @BotFather 发送 /newbot 获取 Bot Token。给 bot 发一条消息，或把它拉进群，再点「查找」选择要接收通知的对话。`)
};

const en_settings_webhook_hint_telegram = /** @type {(inputs: Settings_Webhook_Hint_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message @BotFather on Telegram with /newbot to get a bot token. Send the bot a message or add it to a group, then use Find to pick the chat.`)
};

/**
* | output |
* | --- |
* | "Message @BotFather on Telegram with /newbot to get a bot token. Send the bot a message or add it to a group, then use Find to pick the chat." |
*
* @param {Settings_Webhook_Hint_TelegramInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_telegram = /** @type {((inputs?: Settings_Webhook_Hint_TelegramInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_TelegramInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_telegram(inputs)
	return zh_settings_webhook_hint_telegram(inputs)
});