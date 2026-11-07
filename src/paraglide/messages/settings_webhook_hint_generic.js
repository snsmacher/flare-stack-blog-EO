/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_GenericInputs */

const zh_settings_webhook_hint_generic = /** @type {(inputs: Settings_Webhook_Hint_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送带 HMAC 签名的固定格式 JSON，适合自己编写的接收服务。`)
};

const en_settings_webhook_hint_generic = /** @type {(inputs: Settings_Webhook_Hint_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts a fixed JSON body signed with HMAC, for a receiver you run yourself.`)
};

/**
* | output |
* | --- |
* | "Posts a fixed JSON body signed with HMAC, for a receiver you run yourself." |
*
* @param {Settings_Webhook_Hint_GenericInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_generic = /** @type {((inputs?: Settings_Webhook_Hint_GenericInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_GenericInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_generic(inputs)
	return zh_settings_webhook_hint_generic(inputs)
});