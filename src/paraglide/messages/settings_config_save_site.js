/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Save_SiteInputs */

const zh_settings_config_save_site = /** @type {(inputs: Settings_Config_Save_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存站点设置`)
};

const en_settings_config_save_site = /** @type {(inputs: Settings_Config_Save_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save site settings`)
};

/**
* | output |
* | --- |
* | "Save site settings" |
*
* @param {Settings_Config_Save_SiteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_save_site = /** @type {((inputs?: Settings_Config_Save_SiteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Save_SiteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_save_site(inputs)
	return zh_settings_config_save_site(inputs)
});