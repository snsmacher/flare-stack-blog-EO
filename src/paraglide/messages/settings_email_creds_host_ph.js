/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Host_PhInputs */

const zh_settings_email_creds_host_ph = /** @type {(inputs: Settings_Email_Creds_Host_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：smtp.resend.com`)
};

const en_settings_email_creds_host_ph = /** @type {(inputs: Settings_Email_Creds_Host_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. smtp.resend.com`)
};

/**
* | output |
* | --- |
* | "e.g. smtp.resend.com" |
*
* @param {Settings_Email_Creds_Host_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_host_ph = /** @type {((inputs?: Settings_Email_Creds_Host_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Host_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_host_ph(inputs)
	return zh_settings_email_creds_host_ph(inputs)
});