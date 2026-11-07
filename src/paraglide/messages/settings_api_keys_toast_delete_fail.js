/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Toast_Delete_FailInputs */

const zh_settings_api_keys_toast_delete_fail = /** @type {(inputs: Settings_Api_Keys_Toast_Delete_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败`)
};

const en_settings_api_keys_toast_delete_fail = /** @type {(inputs: Settings_Api_Keys_Toast_Delete_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not delete the key`)
};

/**
* | output |
* | --- |
* | "Could not delete the key" |
*
* @param {Settings_Api_Keys_Toast_Delete_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_toast_delete_fail = /** @type {((inputs?: Settings_Api_Keys_Toast_Delete_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Toast_Delete_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_toast_delete_fail(inputs)
	return zh_settings_api_keys_toast_delete_fail(inputs)
});