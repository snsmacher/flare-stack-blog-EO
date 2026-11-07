/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Field_TemplateInputs */

const zh_settings_webhook_field_template = /** @type {(inputs: Settings_Webhook_Field_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求体模板`)
};

const en_settings_webhook_field_template = /** @type {(inputs: Settings_Webhook_Field_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Body template`)
};

/**
* | output |
* | --- |
* | "Body template" |
*
* @param {Settings_Webhook_Field_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_field_template = /** @type {((inputs?: Settings_Webhook_Field_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Field_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_field_template(inputs)
	return zh_settings_webhook_field_template(inputs)
});