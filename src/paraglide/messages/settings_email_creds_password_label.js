/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Password_LabelInputs */

const zh_settings_email_creds_password_label = /** @type {(inputs: Settings_Email_Creds_Password_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码`)
};

const en_settings_email_creds_password_label = /** @type {(inputs: Settings_Email_Creds_Password_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
};

/**
* | output |
* | --- |
* | "Password" |
*
* @param {Settings_Email_Creds_Password_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_password_label = /** @type {((inputs?: Settings_Email_Creds_Password_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Password_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_password_label(inputs)
	return zh_settings_email_creds_password_label(inputs)
});