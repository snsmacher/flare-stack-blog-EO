/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Connection_UnconfiguredInputs */

const zh_settings_connection_unconfigured = /** @type {(inputs: Settings_Connection_UnconfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置`)
};

const en_settings_connection_unconfigured = /** @type {(inputs: Settings_Connection_UnconfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not configured`)
};

/**
* | output |
* | --- |
* | "Not configured" |
*
* @param {Settings_Connection_UnconfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_connection_unconfigured = /** @type {((inputs?: Settings_Connection_UnconfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Connection_UnconfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_connection_unconfigured(inputs)
	return zh_settings_connection_unconfigured(inputs)
});