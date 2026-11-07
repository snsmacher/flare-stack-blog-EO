/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Otp_Too_Many_AttemptsInputs */

const zh_auth_error_otp_too_many_attempts = /** @type {(inputs: Auth_Error_Otp_Too_Many_AttemptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误次数过多，请重新获取验证码。`)
};

const en_auth_error_otp_too_many_attempts = /** @type {(inputs: Auth_Error_Otp_Too_Many_AttemptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many wrong attempts. Please request a new code.`)
};

/**
* | output |
* | --- |
* | "Too many wrong attempts. Please request a new code." |
*
* @param {Auth_Error_Otp_Too_Many_AttemptsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_error_otp_too_many_attempts = /** @type {((inputs?: Auth_Error_Otp_Too_Many_AttemptsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Otp_Too_Many_AttemptsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_error_otp_too_many_attempts(inputs)
	return zh_auth_error_otp_too_many_attempts(inputs)
});