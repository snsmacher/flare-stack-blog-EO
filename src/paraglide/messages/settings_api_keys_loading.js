/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_LoadingInputs */

const zh_settings_api_keys_loading = /** @type {(inputs: Settings_Api_Keys_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载`)
};

const en_settings_api_keys_loading = /** @type {(inputs: Settings_Api_Keys_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading`)
};

/**
* | output |
* | --- |
* | "Loading" |
*
* @param {Settings_Api_Keys_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_loading = /** @type {((inputs?: Settings_Api_Keys_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_loading(inputs)
	return zh_settings_api_keys_loading(inputs)
});