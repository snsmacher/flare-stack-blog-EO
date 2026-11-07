/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Remove_SecretInputs */

const zh_settings_design_remove_secret = /** @type {(inputs: Settings_Design_Remove_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除已保存的凭据`)
};

const en_settings_design_remove_secret = /** @type {(inputs: Settings_Design_Remove_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove saved credential`)
};

/**
* | output |
* | --- |
* | "Remove saved credential" |
*
* @param {Settings_Design_Remove_SecretInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_remove_secret = /** @type {((inputs?: Settings_Design_Remove_SecretInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Remove_SecretInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_remove_secret(inputs)
	return zh_settings_design_remove_secret(inputs)
});