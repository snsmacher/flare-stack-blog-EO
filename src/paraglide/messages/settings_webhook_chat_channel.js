/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Chat_ChannelInputs */

const zh_settings_webhook_chat_channel = /** @type {(inputs: Settings_Webhook_Chat_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const en_settings_webhook_chat_channel = /** @type {(inputs: Settings_Webhook_Chat_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Settings_Webhook_Chat_ChannelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_chat_channel = /** @type {((inputs?: Settings_Webhook_Chat_ChannelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Chat_ChannelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_chat_channel(inputs)
	return zh_settings_webhook_chat_channel(inputs)
});