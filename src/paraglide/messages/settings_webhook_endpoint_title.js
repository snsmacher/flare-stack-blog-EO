/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Endpoint_TitleInputs */

const zh_settings_webhook_endpoint_title = /** @type {(inputs: Settings_Webhook_Endpoint_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook 推送`)
};

const en_settings_webhook_endpoint_title = /** @type {(inputs: Settings_Webhook_Endpoint_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook Endpoint`)
};

/**
* | output |
* | --- |
* | "Webhook Endpoint" |
*
* @param {Settings_Webhook_Endpoint_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_endpoint_title = /** @type {((inputs?: Settings_Webhook_Endpoint_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Endpoint_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_endpoint_title(inputs)
	return zh_settings_webhook_endpoint_title(inputs)
});