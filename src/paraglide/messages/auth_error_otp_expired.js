/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Otp_ExpiredInputs */

const zh_auth_error_otp_expired = /** @type {(inputs: Auth_Error_Otp_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码已过期，请重新获取。`)
};

const en_auth_error_otp_expired = /** @type {(inputs: Auth_Error_Otp_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This code has expired. Please request a new one.`)
};

/**
* | output |
* | --- |
* | "This code has expired. Please request a new one." |
*
* @param {Auth_Error_Otp_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_error_otp_expired = /** @type {((inputs?: Auth_Error_Otp_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Otp_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_error_otp_expired(inputs)
	return zh_auth_error_otp_expired(inputs)
});