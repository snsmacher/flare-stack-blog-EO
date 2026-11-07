/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_DiscordInputs */

const zh_settings_webhook_hint_discord = /** @type {(inputs: Settings_Webhook_Hint_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道设置 → 整合 → Webhook → 新 Webhook，然后复制 Webhook URL。`)
};

const en_settings_webhook_hint_discord = /** @type {(inputs: Settings_Webhook_Hint_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel settings → Integrations → Webhooks → New Webhook, then copy its URL.`)
};

/**
* | output |
* | --- |
* | "Channel settings → Integrations → Webhooks → New Webhook, then copy its URL." |
*
* @param {Settings_Webhook_Hint_DiscordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_discord = /** @type {((inputs?: Settings_Webhook_Hint_DiscordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_DiscordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_discord(inputs)
	return zh_settings_webhook_hint_discord(inputs)
});