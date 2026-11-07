/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Provider_GenericInputs */

const zh_settings_webhook_provider_generic = /** @type {(inputs: Settings_Webhook_Provider_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用 JSON（签名）`)
};

const en_settings_webhook_provider_generic = /** @type {(inputs: Settings_Webhook_Provider_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generic JSON (signed)`)
};

/**
* | output |
* | --- |
* | "Generic JSON (signed)" |
*
* @param {Settings_Webhook_Provider_GenericInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_provider_generic = /** @type {((inputs?: Settings_Webhook_Provider_GenericInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Provider_GenericInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_provider_generic(inputs)
	return zh_settings_webhook_provider_generic(inputs)
});