/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Host_LabelInputs */

const zh_settings_email_creds_host_label = /** @type {(inputs: Settings_Email_Creds_Host_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SMTP Host`)
};

const en_settings_email_creds_host_label = /** @type {(inputs: Settings_Email_Creds_Host_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SMTP Host`)
};

/**
* | output |
* | --- |
* | "SMTP Host" |
*
* @param {Settings_Email_Creds_Host_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_host_label = /** @type {((inputs?: Settings_Email_Creds_Host_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Host_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_host_label(inputs)
	return zh_settings_email_creds_host_label(inputs)
});