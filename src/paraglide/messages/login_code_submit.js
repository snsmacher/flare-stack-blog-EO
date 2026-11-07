/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_SubmitInputs */

const zh_login_code_submit = /** @type {(inputs: Login_Code_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const en_login_code_submit = /** @type {(inputs: Login_Code_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
};

/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {Login_Code_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_submit = /** @type {((inputs?: Login_Code_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_submit(inputs)
	return zh_login_code_submit(inputs)
});