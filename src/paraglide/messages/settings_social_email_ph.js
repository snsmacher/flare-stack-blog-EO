/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_Email_PhInputs */

const zh_settings_social_email_ph = /** @type {(inputs: Settings_Social_Email_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱地址，如：contact@example.com`)
};

const en_settings_social_email_ph = /** @type {(inputs: Settings_Social_Email_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email address, e.g. contact@example.com`)
};

/**
* | output |
* | --- |
* | "Email address, e.g. contact@example.com" |
*
* @param {Settings_Social_Email_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_email_ph = /** @type {((inputs?: Settings_Social_Email_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_Email_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_email_ph(inputs)
	return zh_settings_social_email_ph(inputs)
});