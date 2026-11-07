/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Invalid_OtpInputs */

const zh_auth_error_invalid_otp = /** @type {(inputs: Auth_Error_Invalid_OtpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码不正确，请核对后重试。`)
};

const en_auth_error_invalid_otp = /** @type {(inputs: Auth_Error_Invalid_OtpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The code is incorrect. Check it and try again.`)
};

/**
* | output |
* | --- |
* | "The code is incorrect. Check it and try again." |
*
* @param {Auth_Error_Invalid_OtpInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_error_invalid_otp = /** @type {((inputs?: Auth_Error_Invalid_OtpInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Invalid_OtpInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_error_invalid_otp(inputs)
	return zh_auth_error_invalid_otp(inputs)
});