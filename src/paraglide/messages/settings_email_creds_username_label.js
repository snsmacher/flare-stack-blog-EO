/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Creds_Username_LabelInputs */

const zh_settings_email_creds_username_label = /** @type {(inputs: Settings_Email_Creds_Username_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名`)
};

const en_settings_email_creds_username_label = /** @type {(inputs: Settings_Email_Creds_Username_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Username`)
};

/**
* | output |
* | --- |
* | "Username" |
*
* @param {Settings_Email_Creds_Username_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_creds_username_label = /** @type {((inputs?: Settings_Email_Creds_Username_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Creds_Username_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_creds_username_label(inputs)
	return zh_settings_email_creds_username_label(inputs)
});