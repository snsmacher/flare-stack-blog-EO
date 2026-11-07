/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Login_Code_Resend_InInputs */

const zh_login_code_resend_in = /** @type {(inputs: Login_Code_Resend_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.seconds} 秒后可重新发送`)
};

const en_login_code_resend_in = /** @type {(inputs: Login_Code_Resend_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resend in ${i?.seconds}s`)
};

/**
* | output |
* | --- |
* | "Resend in {seconds}s" |
*
* @param {Login_Code_Resend_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_resend_in = /** @type {((inputs: Login_Code_Resend_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_Resend_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_resend_in(inputs)
	return zh_login_code_resend_in(inputs)
});