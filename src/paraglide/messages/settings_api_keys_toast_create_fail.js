/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Toast_Create_FailInputs */

const zh_settings_api_keys_toast_create_fail = /** @type {(inputs: Settings_Api_Keys_Toast_Create_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建失败`)
};

const en_settings_api_keys_toast_create_fail = /** @type {(inputs: Settings_Api_Keys_Toast_Create_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not create the key`)
};

/**
* | output |
* | --- |
* | "Could not create the key" |
*
* @param {Settings_Api_Keys_Toast_Create_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_toast_create_fail = /** @type {((inputs?: Settings_Api_Keys_Toast_Create_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Toast_Create_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_toast_create_fail(inputs)
	return zh_settings_api_keys_toast_create_fail(inputs)
});