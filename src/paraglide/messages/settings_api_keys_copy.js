/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_CopyInputs */

const zh_settings_api_keys_copy = /** @type {(inputs: Settings_Api_Keys_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const en_settings_api_keys_copy = /** @type {(inputs: Settings_Api_Keys_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Settings_Api_Keys_CopyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_copy = /** @type {((inputs?: Settings_Api_Keys_CopyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_CopyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_copy(inputs)
	return zh_settings_api_keys_copy(inputs)
});