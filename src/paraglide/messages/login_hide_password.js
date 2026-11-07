/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Hide_PasswordInputs */

const zh_login_hide_password = /** @type {(inputs: Login_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏密码`)
};

const en_login_hide_password = /** @type {(inputs: Login_Hide_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide password`)
};

/**
* | output |
* | --- |
* | "Hide password" |
*
* @param {Login_Hide_PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_hide_password = /** @type {((inputs?: Login_Hide_PasswordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Hide_PasswordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_hide_password(inputs)
	return zh_login_hide_password(inputs)
});