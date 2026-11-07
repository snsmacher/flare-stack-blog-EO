/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_EmailInputs */

const zh_account_email = /** @type {(inputs: Account_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录邮箱`)
};

const en_account_email = /** @type {(inputs: Account_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account email`)
};

/**
* | output |
* | --- |
* | "Account email" |
*
* @param {Account_EmailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_email = /** @type {((inputs?: Account_EmailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_EmailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_email(inputs)
	return zh_account_email(inputs)
});