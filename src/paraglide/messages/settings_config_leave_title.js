/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Leave_TitleInputs */

const zh_settings_config_leave_title = /** @type {(inputs: Settings_Config_Leave_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃未保存的设置？`)
};

const en_settings_config_leave_title = /** @type {(inputs: Settings_Config_Leave_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard unsaved settings?`)
};

/**
* | output |
* | --- |
* | "Discard unsaved settings?" |
*
* @param {Settings_Config_Leave_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_leave_title = /** @type {((inputs?: Settings_Config_Leave_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Leave_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_leave_title(inputs)
	return zh_settings_config_leave_title(inputs)
});