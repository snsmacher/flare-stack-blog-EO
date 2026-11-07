/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Leave_MessageInputs */

const zh_settings_config_leave_message = /** @type {(inputs: Settings_Config_Leave_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离开设置将丢弃尚未保存的配置修改。已上传的图片不会被撤回。`)
};

const en_settings_config_leave_message = /** @type {(inputs: Settings_Config_Leave_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leaving settings discards unsaved configuration edits. Images already uploaded are not reverted.`)
};

/**
* | output |
* | --- |
* | "Leaving settings discards unsaved configuration edits. Images already uploaded are not reverted." |
*
* @param {Settings_Config_Leave_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_leave_message = /** @type {((inputs?: Settings_Config_Leave_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Leave_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_leave_message(inputs)
	return zh_settings_config_leave_message(inputs)
});