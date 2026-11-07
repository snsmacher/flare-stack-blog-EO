/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Toast_Delete_SuccessInputs */

const zh_settings_api_keys_toast_delete_success = /** @type {(inputs: Settings_Api_Keys_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密钥已删除`)
};

const en_settings_api_keys_toast_delete_success = /** @type {(inputs: Settings_Api_Keys_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Key deleted`)
};

/**
* | output |
* | --- |
* | "API Key deleted" |
*
* @param {Settings_Api_Keys_Toast_Delete_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_toast_delete_success = /** @type {((inputs?: Settings_Api_Keys_Toast_Delete_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Toast_Delete_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_toast_delete_success(inputs)
	return zh_settings_api_keys_toast_delete_success(inputs)
});