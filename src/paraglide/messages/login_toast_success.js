/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Toast_SuccessInputs */

const zh_login_toast_success = /** @type {(inputs: Login_Toast_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎回来`)
};

const en_login_toast_success = /** @type {(inputs: Login_Toast_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome back`)
};

/**
* | output |
* | --- |
* | "Welcome back" |
*
* @param {Login_Toast_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_toast_success = /** @type {((inputs?: Login_Toast_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Toast_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_toast_success(inputs)
	return zh_login_toast_success(inputs)
});