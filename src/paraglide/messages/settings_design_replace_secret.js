/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Replace_SecretInputs */

const zh_settings_design_replace_secret = /** @type {(inputs: Settings_Design_Replace_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换凭据`)
};

const en_settings_design_replace_secret = /** @type {(inputs: Settings_Design_Replace_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace credential`)
};

/**
* | output |
* | --- |
* | "Replace credential" |
*
* @param {Settings_Design_Replace_SecretInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_replace_secret = /** @type {((inputs?: Settings_Design_Replace_SecretInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Replace_SecretInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_replace_secret(inputs)
	return zh_settings_design_replace_secret(inputs)
});