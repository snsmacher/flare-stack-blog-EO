/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_BarkInputs */

const zh_settings_webhook_hint_bark = /** @type {(inputs: Settings_Webhook_Hint_BarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Bark App 首页复制推送地址，形如 https://api.day.app/你的Key。`)
};

const en_settings_webhook_hint_bark = /** @type {(inputs: Settings_Webhook_Hint_BarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy the push URL from the Bark app's home screen, such as https://api.day.app/yourKey.`)
};

/**
* | output |
* | --- |
* | "Copy the push URL from the Bark app's home screen, such as https://api.day.app/yourKey." |
*
* @param {Settings_Webhook_Hint_BarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_bark = /** @type {((inputs?: Settings_Webhook_Hint_BarkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_BarkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_bark(inputs)
	return zh_settings_webhook_hint_bark(inputs)
});