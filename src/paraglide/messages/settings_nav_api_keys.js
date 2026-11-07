/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_Api_KeysInputs */

const zh_settings_nav_api_keys = /** @type {(inputs: Settings_Nav_Api_KeysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Key`)
};

const en_settings_nav_api_keys = /** @type {(inputs: Settings_Nav_Api_KeysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Key`)
};

/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Settings_Nav_Api_KeysInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_api_keys = /** @type {((inputs?: Settings_Nav_Api_KeysInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_Api_KeysInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_api_keys(inputs)
	return zh_settings_nav_api_keys(inputs)
});