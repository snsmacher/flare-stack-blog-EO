/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_AccountInputs */

const zh_settings_email_account = /** @type {(inputs: Settings_Email_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发信账号`)
};

const en_settings_email_account = /** @type {(inputs: Settings_Email_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sender account`)
};

/**
* | output |
* | --- |
* | "Sender account" |
*
* @param {Settings_Email_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_account = /** @type {((inputs?: Settings_Email_AccountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_AccountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_account(inputs)
	return zh_settings_email_account(inputs)
});