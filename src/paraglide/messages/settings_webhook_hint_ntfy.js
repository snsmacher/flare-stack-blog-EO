/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Hint_NtfyInputs */

const zh_settings_webhook_hint_ntfy = /** @type {(inputs: Settings_Webhook_Hint_NtfyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`填写主题地址，并在 ntfy App 里订阅同一个主题。知道主题名的人都能订阅，请起一个不容易猜到的名字。`)
};

const en_settings_webhook_hint_ntfy = /** @type {(inputs: Settings_Webhook_Hint_NtfyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the topic URL and subscribe to the same topic in the ntfy app. Anyone who knows the topic can subscribe, so pick a name that is hard to guess.`)
};

/**
* | output |
* | --- |
* | "Enter the topic URL and subscribe to the same topic in the ntfy app. Anyone who knows the topic can subscribe, so pick a name that is hard to guess." |
*
* @param {Settings_Webhook_Hint_NtfyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_hint_ntfy = /** @type {((inputs?: Settings_Webhook_Hint_NtfyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Hint_NtfyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_hint_ntfy(inputs)
	return zh_settings_webhook_hint_ntfy(inputs)
});