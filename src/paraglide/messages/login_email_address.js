/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Email_AddressInputs */

const zh_login_email_address = /** @type {(inputs: Login_Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱地址`)
};

const en_login_email_address = /** @type {(inputs: Login_Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email Address`)
};

/**
* | output |
* | --- |
* | "Email Address" |
*
* @param {Login_Email_AddressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_email_address = /** @type {((inputs?: Login_Email_AddressInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Email_AddressInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_email_address(inputs)
	return zh_login_email_address(inputs)
});