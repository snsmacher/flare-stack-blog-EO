/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Connection_FailedInputs */

const zh_settings_connection_failed = /** @type {(inputs: Settings_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试失败`)
};

const en_settings_connection_failed = /** @type {(inputs: Settings_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test failed`)
};

/**
* | output |
* | --- |
* | "Test failed" |
*
* @param {Settings_Connection_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_connection_failed = /** @type {((inputs?: Settings_Connection_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Connection_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_connection_failed(inputs)
	return zh_settings_connection_failed(inputs)
});