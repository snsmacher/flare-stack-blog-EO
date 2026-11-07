/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_EmptyInputs */

const zh_settings_api_keys_empty = /** @type {(inputs: Settings_Api_Keys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无 API Key`)
};

const en_settings_api_keys_empty = /** @type {(inputs: Settings_Api_Keys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No API Keys`)
};

/**
* | output |
* | --- |
* | "No API Keys" |
*
* @param {Settings_Api_Keys_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_empty = /** @type {((inputs?: Settings_Api_Keys_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_empty(inputs)
	return zh_settings_api_keys_empty(inputs)
});