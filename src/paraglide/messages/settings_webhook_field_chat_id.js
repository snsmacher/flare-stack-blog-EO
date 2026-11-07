/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_Chat_IdInputs */

const zh_settings_webhook_field_chat_id = /** @type {(inputs: Settings_Webhook_Field_Chat_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat ID`)
};

const en_settings_webhook_field_chat_id = /** @type {(inputs: Settings_Webhook_Field_Chat_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat ID`)
};

/**
* | output |
* | --- |
* | "Chat ID" |
*
* @param {Settings_Webhook_Field_Chat_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_chat_id = /** @type {((inputs?: Settings_Webhook_Field_Chat_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_Chat_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_chat_id(inputs)
	return zh_settings_webhook_field_chat_id(inputs)
});