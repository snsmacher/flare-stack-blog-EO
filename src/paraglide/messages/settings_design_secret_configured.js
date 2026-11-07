/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Secret_ConfiguredInputs */

const zh_settings_design_secret_configured = /** @type {(inputs: Settings_Design_Secret_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已配置`)
};

const en_settings_design_secret_configured = /** @type {(inputs: Settings_Design_Secret_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured`)
};

/**
* | output |
* | --- |
* | "Configured" |
*
* @param {Settings_Design_Secret_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_secret_configured = /** @type {((inputs?: Settings_Design_Secret_ConfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Secret_ConfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_secret_configured(inputs)
	return zh_settings_design_secret_configured(inputs)
});