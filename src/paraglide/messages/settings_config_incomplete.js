/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_IncompleteInputs */

const zh_settings_config_incomplete = /** @type {(inputs: Settings_Config_IncompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置不完整：请检查邮件账号字段，或为启用的 Webhook 配置密钥。`)
};

const en_settings_config_incomplete = /** @type {(inputs: Settings_Config_IncompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration is incomplete. Check the email account fields or the active Webhook secret.`)
};

/**
* | output |
* | --- |
* | "Configuration is incomplete. Check the email account fields or the active Webhook secret." |
*
* @param {Settings_Config_IncompleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_incomplete = /** @type {((inputs?: Settings_Config_IncompleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_IncompleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_incomplete(inputs)
	return zh_settings_config_incomplete(inputs)
});