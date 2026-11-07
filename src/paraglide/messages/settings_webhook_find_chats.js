/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Find_ChatsInputs */

const zh_settings_webhook_find_chats = /** @type {(inputs: Settings_Webhook_Find_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查找`)
};

const en_settings_webhook_find_chats = /** @type {(inputs: Settings_Webhook_Find_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find`)
};

/**
* | output |
* | --- |
* | "Find" |
*
* @param {Settings_Webhook_Find_ChatsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_find_chats = /** @type {((inputs?: Settings_Webhook_Find_ChatsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Find_ChatsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_find_chats(inputs)
	return zh_settings_webhook_find_chats(inputs)
});