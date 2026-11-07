/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Unknown_ErrorInputs */

const zh_settings_email_unknown_error = /** @type {(inputs: Settings_Email_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知错误`)
};

const en_settings_email_unknown_error = /** @type {(inputs: Settings_Email_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown error`)
};

/**
* | output |
* | --- |
* | "Unknown error" |
*
* @param {Settings_Email_Unknown_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_unknown_error = /** @type {((inputs?: Settings_Email_Unknown_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Unknown_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_unknown_error(inputs)
	return zh_settings_email_unknown_error(inputs)
});