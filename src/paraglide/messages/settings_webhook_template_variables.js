/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Webhook_Template_VariablesInputs */

const zh_settings_webhook_template_variables = /** @type {(inputs: Settings_Webhook_Template_VariablesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用变量`)
};

const en_settings_webhook_template_variables = /** @type {(inputs: Settings_Webhook_Template_VariablesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Variables`)
};

/**
* | output |
* | --- |
* | "Variables" |
*
* @param {Settings_Webhook_Template_VariablesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_webhook_template_variables = /** @type {((inputs?: Settings_Webhook_Template_VariablesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Webhook_Template_VariablesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_webhook_template_variables(inputs)
	return zh_settings_webhook_template_variables(inputs)
});