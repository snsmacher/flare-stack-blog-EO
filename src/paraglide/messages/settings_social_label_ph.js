/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_Label_PhInputs */

const zh_settings_social_label_ph = /** @type {(inputs: Settings_Social_Label_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台名称（如：即刻）`)
};

const en_settings_social_label_ph = /** @type {(inputs: Settings_Social_Label_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform name`)
};

/**
* | output |
* | --- |
* | "Platform name" |
*
* @param {Settings_Social_Label_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_label_ph = /** @type {((inputs?: Settings_Social_Label_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_Label_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_label_ph(inputs)
	return zh_settings_social_label_ph(inputs)
});