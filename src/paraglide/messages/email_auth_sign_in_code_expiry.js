/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Auth_Sign_In_Code_ExpiryInputs */

const zh_email_auth_sign_in_code_expiry = /** @type {(inputs: Email_Auth_Sign_In_Code_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录码将在 10 分钟后过期，且只能使用一次。`)
};

const en_email_auth_sign_in_code_expiry = /** @type {(inputs: Email_Auth_Sign_In_Code_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This code expires in 10 minutes and can be used once.`)
};

/**
* | output |
* | --- |
* | "This code expires in 10 minutes and can be used once." |
*
* @param {Email_Auth_Sign_In_Code_ExpiryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_auth_sign_in_code_expiry = /** @type {((inputs?: Email_Auth_Sign_In_Code_ExpiryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Auth_Sign_In_Code_ExpiryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_auth_sign_in_code_expiry(inputs)
	return zh_email_auth_sign_in_code_expiry(inputs)
});