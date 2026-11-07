/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_WecomInputs */

const zh_settings_webhook_hint_wecom = /** @type {(inputs: Settings_Webhook_Hint_WecomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在群聊右上角 → 添加群机器人 → 新创建一个机器人，复制 Webhook 地址。`)
};

const en_settings_webhook_hint_wecom = /** @type {(inputs: Settings_Webhook_Hint_WecomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In the group chat, add a group bot, create a new one and copy its Webhook URL.`)
};

/**
* | output |
* | --- |
* | "In the group chat, add a group bot, create a new one and copy its Webhook URL." |
*
* @param {Settings_Webhook_Hint_WecomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_wecom = /** @type {((inputs?: Settings_Webhook_Hint_WecomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_WecomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_wecom(inputs)
	return zh_settings_webhook_hint_wecom(inputs)
});