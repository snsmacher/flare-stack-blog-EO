/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_EmptyInputs */

const zh_settings_webhook_empty = /** @type {(inputs: Settings_Webhook_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`留空则不发送`)
};

const en_settings_webhook_empty = /** @type {(inputs: Settings_Webhook_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave empty to disable`)
};

/**
* | output |
* | --- |
* | "Leave empty to disable" |
*
* @param {Settings_Webhook_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_empty = /** @type {((inputs?: Settings_Webhook_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_empty(inputs)
	return zh_settings_webhook_empty(inputs)
});