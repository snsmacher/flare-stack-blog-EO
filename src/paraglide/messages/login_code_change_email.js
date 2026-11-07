/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_Change_EmailInputs */

const zh_login_code_change_email = /** @type {(inputs: Login_Code_Change_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`换个邮箱`)
};

const en_login_code_change_email = /** @type {(inputs: Login_Code_Change_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use another email`)
};

/**
* | output |
* | --- |
* | "Use another email" |
*
* @param {Login_Code_Change_EmailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_change_email = /** @type {((inputs?: Login_Code_Change_EmailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_Change_EmailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_change_email(inputs)
	return zh_login_code_change_email(inputs)
});