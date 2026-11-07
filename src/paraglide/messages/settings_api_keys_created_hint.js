/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Created_HintInputs */

const zh_settings_api_keys_created_hint = /** @type {(inputs: Settings_Api_Keys_Created_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整密钥仅显示一次，关闭后无法再次查看。`)
};

const en_settings_api_keys_created_hint = /** @type {(inputs: Settings_Api_Keys_Created_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The full secret is shown only once and cannot be recovered after this panel is closed.`)
};

/**
* | output |
* | --- |
* | "The full secret is shown only once and cannot be recovered after this panel is closed." |
*
* @param {Settings_Api_Keys_Created_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_created_hint = /** @type {((inputs?: Settings_Api_Keys_Created_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Created_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_created_hint(inputs)
	return zh_settings_api_keys_created_hint(inputs)
});