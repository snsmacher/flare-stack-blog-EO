/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_Chat_Id_PhInputs */

const zh_settings_webhook_field_chat_id_ph = /** @type {(inputs: Settings_Webhook_Field_Chat_Id_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 123456789 或 -1001234567890`)
};

const en_settings_webhook_field_chat_id_ph = /** @type {(inputs: Settings_Webhook_Field_Chat_Id_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For example 123456789 or -1001234567890`)
};

/**
* | output |
* | --- |
* | "For example 123456789 or -1001234567890" |
*
* @param {Settings_Webhook_Field_Chat_Id_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_chat_id_ph = /** @type {((inputs?: Settings_Webhook_Field_Chat_Id_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_Chat_Id_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_chat_id_ph(inputs)
	return zh_settings_webhook_field_chat_id_ph(inputs)
});