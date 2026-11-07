/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_CopiedInputs */

const zh_settings_api_keys_copied = /** @type {(inputs: Settings_Api_Keys_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制到剪贴板`)
};

const en_settings_api_keys_copied = /** @type {(inputs: Settings_Api_Keys_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied to clipboard`)
};

/**
* | output |
* | --- |
* | "Copied to clipboard" |
*
* @param {Settings_Api_Keys_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_copied = /** @type {((inputs?: Settings_Api_Keys_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_copied(inputs)
	return zh_settings_api_keys_copied(inputs)
});