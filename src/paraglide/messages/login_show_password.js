/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Show_PasswordInputs */

const zh_login_show_password = /** @type {(inputs: Login_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示密码`)
};

const en_login_show_password = /** @type {(inputs: Login_Show_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show password`)
};

/**
* | output |
* | --- |
* | "Show password" |
*
* @param {Login_Show_PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_show_password = /** @type {((inputs?: Login_Show_PasswordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Show_PasswordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_show_password(inputs)
	return zh_login_show_password(inputs)
});