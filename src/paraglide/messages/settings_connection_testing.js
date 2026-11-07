/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Connection_TestingInputs */

const zh_settings_connection_testing = /** @type {(inputs: Settings_Connection_TestingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试中`)
};

const en_settings_connection_testing = /** @type {(inputs: Settings_Connection_TestingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testing`)
};

/**
* | output |
* | --- |
* | "Testing" |
*
* @param {Settings_Connection_TestingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_connection_testing = /** @type {((inputs?: Settings_Connection_TestingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Connection_TestingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_connection_testing(inputs)
	return zh_settings_connection_testing(inputs)
});