/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Username_PhInputs */

const zh_settings_email_creds_username_ph = /** @type {(inputs: Settings_Email_Creds_Username_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：resend`)
};

const en_settings_email_creds_username_ph = /** @type {(inputs: Settings_Email_Creds_Username_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. resend`)
};

/**
* | output |
* | --- |
* | "e.g. resend" |
*
* @param {Settings_Email_Creds_Username_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_username_ph = /** @type {((inputs?: Settings_Email_Creds_Username_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Username_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_username_ph(inputs)
	return zh_settings_email_creds_username_ph(inputs)
});