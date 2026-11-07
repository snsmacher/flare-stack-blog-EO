/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Auth_Sign_In_Code_SubjectInputs */

const zh_email_auth_sign_in_code_subject = /** @type {(inputs: Email_Auth_Sign_In_Code_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您的登录码`)
};

const en_email_auth_sign_in_code_subject = /** @type {(inputs: Email_Auth_Sign_In_Code_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your sign-in code`)
};

/**
* | output |
* | --- |
* | "Your sign-in code" |
*
* @param {Email_Auth_Sign_In_Code_SubjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_auth_sign_in_code_subject = /** @type {((inputs?: Email_Auth_Sign_In_Code_SubjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Auth_Sign_In_Code_SubjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_auth_sign_in_code_subject(inputs)
	return zh_email_auth_sign_in_code_subject(inputs)
});