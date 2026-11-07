/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Connection_ConfiguredInputs */

const zh_settings_connection_configured = /** @type {(inputs: Settings_Connection_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已配置 · 未验证`)
};

const en_settings_connection_configured = /** @type {(inputs: Settings_Connection_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured · Untested`)
};

/**
* | output |
* | --- |
* | "Configured · Untested" |
*
* @param {Settings_Connection_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_connection_configured = /** @type {((inputs?: Settings_Connection_ConfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Connection_ConfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_connection_configured(inputs)
	return zh_settings_connection_configured(inputs)
});