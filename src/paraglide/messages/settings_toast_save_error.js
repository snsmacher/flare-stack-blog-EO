/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Toast_Save_ErrorInputs */

const zh_settings_toast_save_error = /** @type {(inputs: Settings_Toast_Save_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存失败，请重试`)
};

const en_settings_toast_save_error = /** @type {(inputs: Settings_Toast_Save_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to save settings, please try again`)
};

/**
* | output |
* | --- |
* | "Failed to save settings, please try again" |
*
* @param {Settings_Toast_Save_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_toast_save_error = /** @type {((inputs?: Settings_Toast_Save_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Toast_Save_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_toast_save_error(inputs)
	return zh_settings_toast_save_error(inputs)
});