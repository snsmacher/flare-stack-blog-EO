/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Login_Code_DescInputs */

const zh_login_code_desc = /** @type {(inputs: Login_Code_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`我们已向 ${i?.email} 发送了 6 位验证码，10 分钟内有效。`)
};

const en_login_code_desc = /** @type {(inputs: Login_Code_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We sent a 6-digit code to ${i?.email}. It stays valid for 10 minutes.`)
};

/**
* | output |
* | --- |
* | "We sent a 6-digit code to {email}. It stays valid for 10 minutes." |
*
* @param {Login_Code_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_desc = /** @type {((inputs: Login_Code_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_desc(inputs)
	return zh_login_code_desc(inputs)
});