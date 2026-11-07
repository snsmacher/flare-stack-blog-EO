/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Save_NotificationsInputs */

const zh_settings_config_save_notifications = /** @type {(inputs: Settings_Config_Save_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存通知设置`)
};

const en_settings_config_save_notifications = /** @type {(inputs: Settings_Config_Save_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save notification settings`)
};

/**
* | output |
* | --- |
* | "Save notification settings" |
*
* @param {Settings_Config_Save_NotificationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_save_notifications = /** @type {((inputs?: Settings_Config_Save_NotificationsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Save_NotificationsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_save_notifications(inputs)
	return zh_settings_config_save_notifications(inputs)
});