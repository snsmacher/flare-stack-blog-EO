/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Toast_Save_SuccessInputs */

const zh_settings_toast_save_success = /** @type {(inputs: Settings_Toast_Save_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置已保存`)
};

const en_settings_toast_save_success = /** @type {(inputs: Settings_Toast_Save_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings saved`)
};

/**
* | output |
* | --- |
* | "Settings saved" |
*
* @param {Settings_Toast_Save_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_toast_save_success = /** @type {((inputs?: Settings_Toast_Save_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Toast_Save_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_toast_save_success(inputs)
	return zh_settings_toast_save_success(inputs)
});