/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Validation_Invalid_EmailInputs */

const zh_login_validation_invalid_email = /** @type {(inputs: Login_Validation_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效的邮箱地址`)
};

const en_login_validation_invalid_email = /** @type {(inputs: Login_Validation_Invalid_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid email address`)
};

/**
* | output |
* | --- |
* | "Please enter a valid email address" |
*
* @param {Login_Validation_Invalid_EmailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_validation_invalid_email = /** @type {((inputs?: Login_Validation_Invalid_EmailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Validation_Invalid_EmailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_validation_invalid_email(inputs)
	return zh_login_validation_invalid_email(inputs)
});