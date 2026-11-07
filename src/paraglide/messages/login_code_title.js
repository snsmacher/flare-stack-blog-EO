/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_TitleInputs */

const zh_login_code_title = /** @type {(inputs: Login_Code_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请查收邮件`)
};

const en_login_code_title = /** @type {(inputs: Login_Code_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your email`)
};

/**
* | output |
* | --- |
* | "Check your email" |
*
* @param {Login_Code_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_title = /** @type {((inputs?: Login_Code_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_title(inputs)
	return zh_login_code_title(inputs)
});