/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Port_PhInputs */

const zh_settings_email_creds_port_ph = /** @type {(inputs: Settings_Email_Creds_Port_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`465 或 587`)
};

const en_settings_email_creds_port_ph = /** @type {(inputs: Settings_Email_Creds_Port_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`465 or 587`)
};

/**
* | output |
* | --- |
* | "465 or 587" |
*
* @param {Settings_Email_Creds_Port_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_port_ph = /** @type {((inputs?: Settings_Email_Creds_Port_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Port_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_port_ph(inputs)
	return zh_settings_email_creds_port_ph(inputs)
});