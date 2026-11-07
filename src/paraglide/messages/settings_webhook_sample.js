/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_SampleInputs */

const zh_settings_webhook_sample = /** @type {(inputs: Settings_Webhook_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`示例事件`)
};

const en_settings_webhook_sample = /** @type {(inputs: Settings_Webhook_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sample event`)
};

/**
* | output |
* | --- |
* | "Sample event" |
*
* @param {Settings_Webhook_SampleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_sample = /** @type {((inputs?: Settings_Webhook_SampleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_SampleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_sample(inputs)
	return zh_settings_webhook_sample(inputs)
});