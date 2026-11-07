/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Auth_Sign_In_Code_IgnoreInputs */

const zh_email_auth_sign_in_code_ignore = /** @type {(inputs: Email_Auth_Sign_In_Code_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果您没有尝试登录，请忽略此邮件。`)
};

const en_email_auth_sign_in_code_ignore = /** @type {(inputs: Email_Auth_Sign_In_Code_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you did not try to sign in, you can ignore this email.`)
};

/**
* | output |
* | --- |
* | "If you did not try to sign in, you can ignore this email." |
*
* @param {Email_Auth_Sign_In_Code_IgnoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_auth_sign_in_code_ignore = /** @type {((inputs?: Email_Auth_Sign_In_Code_IgnoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Auth_Sign_In_Code_IgnoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_auth_sign_in_code_ignore(inputs)
	return zh_email_auth_sign_in_code_ignore(inputs)
});