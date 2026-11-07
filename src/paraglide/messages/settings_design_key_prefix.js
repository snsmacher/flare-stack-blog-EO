/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Key_PrefixInputs */

const zh_settings_design_key_prefix = /** @type {(inputs: Settings_Design_Key_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密钥前缀`)
};

const en_settings_design_key_prefix = /** @type {(inputs: Settings_Design_Key_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key prefix`)
};

/**
* | output |
* | --- |
* | "Key prefix" |
*
* @param {Settings_Design_Key_PrefixInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_key_prefix = /** @type {((inputs?: Settings_Design_Key_PrefixInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Key_PrefixInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_key_prefix(inputs)
	return zh_settings_design_key_prefix(inputs)
});