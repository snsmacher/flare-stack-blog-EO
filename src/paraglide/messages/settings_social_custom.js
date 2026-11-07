/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_CustomInputs */

const zh_settings_social_custom = /** @type {(inputs: Settings_Social_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义`)
};

const en_settings_social_custom = /** @type {(inputs: Settings_Social_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom`)
};

/**
* | output |
* | --- |
* | "Custom" |
*
* @param {Settings_Social_CustomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_custom = /** @type {((inputs?: Settings_Social_CustomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_CustomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_custom(inputs)
	return zh_settings_social_custom(inputs)
});