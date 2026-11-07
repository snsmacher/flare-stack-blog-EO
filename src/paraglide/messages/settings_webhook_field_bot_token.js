/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_Bot_TokenInputs */

const zh_settings_webhook_field_bot_token = /** @type {(inputs: Settings_Webhook_Field_Bot_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot Token`)
};

const en_settings_webhook_field_bot_token = /** @type {(inputs: Settings_Webhook_Field_Bot_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot token`)
};

/**
* | output |
* | --- |
* | "Bot token" |
*
* @param {Settings_Webhook_Field_Bot_TokenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_bot_token = /** @type {((inputs?: Settings_Webhook_Field_Bot_TokenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_Bot_TokenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_bot_token(inputs)
	return zh_settings_webhook_field_bot_token(inputs)
});