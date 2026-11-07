/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_UnnamedInputs */

const zh_settings_api_keys_unnamed = /** @type {(inputs: Settings_Api_Keys_UnnamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名`)
};

const en_settings_api_keys_unnamed = /** @type {(inputs: Settings_Api_Keys_UnnamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unnamed`)
};

/**
* | output |
* | --- |
* | "Unnamed" |
*
* @param {Settings_Api_Keys_UnnamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_unnamed = /** @type {((inputs?: Settings_Api_Keys_UnnamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_UnnamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_unnamed(inputs)
	return zh_settings_api_keys_unnamed(inputs)
});