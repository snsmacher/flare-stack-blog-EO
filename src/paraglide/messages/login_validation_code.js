/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Validation_CodeInputs */

const zh_login_validation_code = /** @type {(inputs: Login_Validation_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入邮件中的 6 位验证码`)
};

const en_login_validation_code = /** @type {(inputs: Login_Validation_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the 6-digit code from the email`)
};

/**
* | output |
* | --- |
* | "Enter the 6-digit code from the email" |
*
* @param {Login_Validation_CodeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_validation_code = /** @type {((inputs?: Login_Validation_CodeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Validation_CodeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_validation_code(inputs)
	return zh_login_validation_code(inputs)
});