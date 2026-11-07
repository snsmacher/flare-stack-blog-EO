/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Docs_LinkInputs */

const zh_settings_webhook_docs_link = /** @type {(inputs: Settings_Webhook_Docs_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`格式与签名说明`)
};

const en_settings_webhook_docs_link = /** @type {(inputs: Settings_Webhook_Docs_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payload and signature guide`)
};

/**
* | output |
* | --- |
* | "Payload and signature guide" |
*
* @param {Settings_Webhook_Docs_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_docs_link = /** @type {((inputs?: Settings_Webhook_Docs_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Docs_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_docs_link(inputs)
	return zh_settings_webhook_docs_link(inputs)
});