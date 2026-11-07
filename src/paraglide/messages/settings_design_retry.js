/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_RetryInputs */

const zh_settings_design_retry = /** @type {(inputs: Settings_Design_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const en_settings_design_retry = /** @type {(inputs: Settings_Design_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
};

/**
* | output |
* | --- |
* | "Retry" |
*
* @param {Settings_Design_RetryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_retry = /** @type {((inputs?: Settings_Design_RetryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_RetryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_retry(inputs)
	return zh_settings_design_retry(inputs)
});