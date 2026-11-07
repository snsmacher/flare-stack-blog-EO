/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_CustomInputs */

const zh_settings_webhook_hint_custom = /** @type {(inputs: Settings_Webhook_Hint_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按目标服务的要求编写请求体，发送时会替换其中的变量；请求体是 JSON 时，变量会自动转义。填写签名密钥后会附带 X-Flare-Signature 请求头。`)
};

const en_settings_webhook_hint_custom = /** @type {(inputs: Settings_Webhook_Hint_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write the body the receiving service expects; variables are filled in when sending, and escaped when the body is JSON. With a signing key, X-Flare-Signature is sent as well.`)
};

/**
* | output |
* | --- |
* | "Write the body the receiving service expects; variables are filled in when sending, and escaped when the body is JSON. With a signing key, X-Flare-Signature ..." |
*
* @param {Settings_Webhook_Hint_CustomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_custom = /** @type {((inputs?: Settings_Webhook_Hint_CustomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_CustomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_custom(inputs)
	return zh_settings_webhook_hint_custom(inputs)
});