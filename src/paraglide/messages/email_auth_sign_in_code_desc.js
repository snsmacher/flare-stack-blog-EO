/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Auth_Sign_In_Code_DescInputs */

const zh_email_auth_sign_in_code_desc = /** @type {(inputs: Email_Auth_Sign_In_Code_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请在登录页面输入以下登录码：`)
};

const en_email_auth_sign_in_code_desc = /** @type {(inputs: Email_Auth_Sign_In_Code_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter this code on the sign-in page:`)
};

/**
* | output |
* | --- |
* | "Enter this code on the sign-in page:" |
*
* @param {Email_Auth_Sign_In_Code_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_auth_sign_in_code_desc = /** @type {((inputs?: Email_Auth_Sign_In_Code_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Auth_Sign_In_Code_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_auth_sign_in_code_desc(inputs)
	return zh_email_auth_sign_in_code_desc(inputs)
});