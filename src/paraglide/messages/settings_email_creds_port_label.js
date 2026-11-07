/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Port_LabelInputs */

const zh_settings_email_creds_port_label = /** @type {(inputs: Settings_Email_Creds_Port_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`端口`)
};

const en_settings_email_creds_port_label = /** @type {(inputs: Settings_Email_Creds_Port_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Port`)
};

/**
* | output |
* | --- |
* | "Port" |
*
* @param {Settings_Email_Creds_Port_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_port_label = /** @type {((inputs?: Settings_Email_Creds_Port_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Port_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_port_label(inputs)
	return zh_settings_email_creds_port_label(inputs)
});