/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Chat_PrivateInputs */

const zh_settings_webhook_chat_private = /** @type {(inputs: Settings_Webhook_Chat_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`私聊`)
};

const en_settings_webhook_chat_private = /** @type {(inputs: Settings_Webhook_Chat_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private`)
};

/**
* | output |
* | --- |
* | "Private" |
*
* @param {Settings_Webhook_Chat_PrivateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_chat_private = /** @type {((inputs?: Settings_Webhook_Chat_PrivateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Chat_PrivateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_chat_private(inputs)
	return zh_settings_webhook_chat_private(inputs)
});