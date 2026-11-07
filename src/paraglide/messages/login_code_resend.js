/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_ResendInputs */

const zh_login_code_resend = /** @type {(inputs: Login_Code_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新发送`)
};

const en_login_code_resend = /** @type {(inputs: Login_Code_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resend code`)
};

/**
* | output |
* | --- |
* | "Resend code" |
*
* @param {Login_Code_ResendInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_resend = /** @type {((inputs?: Login_Code_ResendInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_ResendInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_resend(inputs)
	return zh_login_code_resend(inputs)
});