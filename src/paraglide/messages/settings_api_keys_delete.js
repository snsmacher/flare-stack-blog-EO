/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_DeleteInputs */

const zh_settings_api_keys_delete = /** @type {(inputs: Settings_Api_Keys_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const en_settings_api_keys_delete = /** @type {(inputs: Settings_Api_Keys_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Settings_Api_Keys_DeleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_delete = /** @type {((inputs?: Settings_Api_Keys_DeleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_DeleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_delete(inputs)
	return zh_settings_api_keys_delete(inputs)
});