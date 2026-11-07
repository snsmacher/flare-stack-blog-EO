/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_CreateInputs */

const zh_settings_api_keys_create = /** @type {(inputs: Settings_Api_Keys_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建`)
};

const en_settings_api_keys_create = /** @type {(inputs: Settings_Api_Keys_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create`)
};

/**
* | output |
* | --- |
* | "Create" |
*
* @param {Settings_Api_Keys_CreateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_create = /** @type {((inputs?: Settings_Api_Keys_CreateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_CreateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_create(inputs)
	return zh_settings_api_keys_create(inputs)
});