/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Name_PhInputs */

const zh_settings_api_keys_name_ph = /** @type {(inputs: Settings_Api_Keys_Name_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于识别此密钥`)
};

const en_settings_api_keys_name_ph = /** @type {(inputs: Settings_Api_Keys_Name_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A label for this key`)
};

/**
* | output |
* | --- |
* | "A label for this key" |
*
* @param {Settings_Api_Keys_Name_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_name_ph = /** @type {((inputs?: Settings_Api_Keys_Name_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Name_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_name_ph(inputs)
	return zh_settings_api_keys_name_ph(inputs)
});