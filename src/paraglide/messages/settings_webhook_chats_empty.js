/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Chats_EmptyInputs */

const zh_settings_webhook_chats_empty = /** @type {(inputs: Settings_Webhook_Chats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有找到对话。先给 bot 发一条消息，或把它拉进群，再点一次「查找」。`)
};

const en_settings_webhook_chats_empty = /** @type {(inputs: Settings_Webhook_Chats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No chats found. Send the bot a message or add it to a group, then try Find again.`)
};

/**
* | output |
* | --- |
* | "No chats found. Send the bot a message or add it to a group, then try Find again." |
*
* @param {Settings_Webhook_Chats_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_chats_empty = /** @type {((inputs?: Settings_Webhook_Chats_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Chats_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_chats_empty(inputs)
	return zh_settings_webhook_chats_empty(inputs)
});