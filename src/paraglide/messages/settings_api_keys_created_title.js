/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Created_TitleInputs */

const zh_settings_api_keys_created_title = /** @type {(inputs: Settings_Api_Keys_Created_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密钥已创建`)
};

const en_settings_api_keys_created_title = /** @type {(inputs: Settings_Api_Keys_Created_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key created`)
};

/**
* | output |
* | --- |
* | "Key created" |
*
* @param {Settings_Api_Keys_Created_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_created_title = /** @type {((inputs?: Settings_Api_Keys_Created_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Created_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_created_title(inputs)
	return zh_settings_api_keys_created_title(inputs)
});