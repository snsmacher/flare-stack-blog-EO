/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Settings_Webhook_Toast_Chats_FailInputs */

const zh_settings_webhook_toast_chats_fail = /** @type {(inputs: Settings_Webhook_Toast_Chats_FailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`查找对话失败：${i?.message}`)
};

const en_settings_webhook_toast_chats_fail = /** @type {(inputs: Settings_Webhook_Toast_Chats_FailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Could not find chats: ${i?.message}`)
};

/**
* | output |
* | --- |
* | "Could not find chats: {message}" |
*
* @param {Settings_Webhook_Toast_Chats_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_toast_chats_fail = /** @type {((inputs: Settings_Webhook_Toast_Chats_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Toast_Chats_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_toast_chats_fail(inputs)
	return zh_settings_webhook_toast_chats_fail(inputs)
});