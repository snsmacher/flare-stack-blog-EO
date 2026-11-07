/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Chat_GroupInputs */

const zh_settings_webhook_chat_group = /** @type {(inputs: Settings_Webhook_Chat_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`群组`)
};

const en_settings_webhook_chat_group = /** @type {(inputs: Settings_Webhook_Chat_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group`)
};

/**
* | output |
* | --- |
* | "Group" |
*
* @param {Settings_Webhook_Chat_GroupInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_chat_group = /** @type {((inputs?: Settings_Webhook_Chat_GroupInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Chat_GroupInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_chat_group(inputs)
	return zh_settings_webhook_chat_group(inputs)
});