/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Sender_Addr_PhInputs */

const zh_settings_email_creds_sender_addr_ph = /** @type {(inputs: Settings_Email_Creds_Sender_Addr_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`noreply@yourdomain.com`)
};

const en_settings_email_creds_sender_addr_ph = /** @type {(inputs: Settings_Email_Creds_Sender_Addr_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`noreply@yourdomain.com`)
};

/**
* | output |
* | --- |
* | "noreply@yourdomain.com" |
*
* @param {Settings_Email_Creds_Sender_Addr_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_sender_addr_ph = /** @type {((inputs?: Settings_Email_Creds_Sender_Addr_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Sender_Addr_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_sender_addr_ph(inputs)
	return zh_settings_email_creds_sender_addr_ph(inputs)
});