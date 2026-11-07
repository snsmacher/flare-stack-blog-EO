/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Sender_Addr_LabelInputs */

const zh_settings_email_creds_sender_addr_label = /** @type {(inputs: Settings_Email_Creds_Sender_Addr_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发信邮箱`)
};

const en_settings_email_creds_sender_addr_label = /** @type {(inputs: Settings_Email_Creds_Sender_Addr_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sender Email`)
};

/**
* | output |
* | --- |
* | "Sender Email" |
*
* @param {Settings_Email_Creds_Sender_Addr_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_sender_addr_label = /** @type {((inputs?: Settings_Email_Creds_Sender_Addr_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Sender_Addr_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_sender_addr_label(inputs)
	return zh_settings_email_creds_sender_addr_label(inputs)
});