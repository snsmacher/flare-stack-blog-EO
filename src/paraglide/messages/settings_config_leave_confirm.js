/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Leave_ConfirmInputs */

const zh_settings_config_leave_confirm = /** @type {(inputs: Settings_Config_Leave_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改并离开`)
};

const en_settings_config_leave_confirm = /** @type {(inputs: Settings_Config_Leave_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard and leave`)
};

/**
* | output |
* | --- |
* | "Discard and leave" |
*
* @param {Settings_Config_Leave_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_leave_confirm = /** @type {((inputs?: Settings_Config_Leave_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Leave_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_leave_confirm(inputs)
	return zh_settings_config_leave_confirm(inputs)
});