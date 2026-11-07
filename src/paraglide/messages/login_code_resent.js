/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_ResentInputs */

const zh_login_code_resent = /** @type {(inputs: Login_Code_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的验证码已发送`)
};

const en_login_code_resent = /** @type {(inputs: Login_Code_ResentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new code is on its way`)
};

/**
* | output |
* | --- |
* | "A new code is on its way" |
*
* @param {Login_Code_ResentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_resent = /** @type {((inputs?: Login_Code_ResentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_ResentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_resent(inputs)
	return zh_login_code_resent(inputs)
});