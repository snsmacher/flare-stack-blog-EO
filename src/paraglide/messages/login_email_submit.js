/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Email_SubmitInputs */

const zh_login_email_submit = /** @type {(inputs: Login_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送验证码`)
};

const en_login_email_submit = /** @type {(inputs: Login_Email_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send sign-in code`)
};

/**
* | output |
* | --- |
* | "Send sign-in code" |
*
* @param {Login_Email_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_email_submit = /** @type {((inputs?: Login_Email_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Email_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_email_submit(inputs)
	return zh_login_email_submit(inputs)
});