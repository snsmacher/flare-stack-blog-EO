/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Email_AlternativeInputs */

const zh_login_email_alternative = /** @type {(inputs: Login_Email_AlternativeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或使用邮箱`)
};

const en_login_email_alternative = /** @type {(inputs: Login_Email_AlternativeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or use email`)
};

/**
* | output |
* | --- |
* | "Or use email" |
*
* @param {Login_Email_AlternativeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_email_alternative = /** @type {((inputs?: Login_Email_AlternativeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Email_AlternativeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_email_alternative(inputs)
	return zh_login_email_alternative(inputs)
});