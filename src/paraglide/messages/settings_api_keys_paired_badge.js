/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Paired_BadgeInputs */

const zh_settings_api_keys_paired_badge = /** @type {(inputs: Settings_Api_Keys_Paired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配对`)
};

const en_settings_api_keys_paired_badge = /** @type {(inputs: Settings_Api_Keys_Paired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paired`)
};

/**
* | output |
* | --- |
* | "Paired" |
*
* @param {Settings_Api_Keys_Paired_BadgeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_paired_badge = /** @type {((inputs?: Settings_Api_Keys_Paired_BadgeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Paired_BadgeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_paired_badge(inputs)
	return zh_settings_api_keys_paired_badge(inputs)
});