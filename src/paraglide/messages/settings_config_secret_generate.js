/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Secret_GenerateInputs */

const zh_settings_config_secret_generate = /** @type {(inputs: Settings_Config_Secret_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成新密钥`)
};

const en_settings_config_secret_generate = /** @type {(inputs: Settings_Config_Secret_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate a new secret`)
};

/**
* | output |
* | --- |
* | "Generate a new secret" |
*
* @param {Settings_Config_Secret_GenerateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_secret_generate = /** @type {((inputs?: Settings_Config_Secret_GenerateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Secret_GenerateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_secret_generate(inputs)
	return zh_settings_config_secret_generate(inputs)
});