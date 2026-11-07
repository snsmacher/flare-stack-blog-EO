/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_SendingInputs */

const zh_login_code_sending = /** @type {(inputs: Login_Code_SendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送中...`)
};

const en_login_code_sending = /** @type {(inputs: Login_Code_SendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sending...`)
};

/**
* | output |
* | --- |
* | "Sending..." |
*
* @param {Login_Code_SendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_sending = /** @type {((inputs?: Login_Code_SendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_SendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_sending(inputs)
	return zh_login_code_sending(inputs)
});