/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_TitleInputs */

const zh_account_title = /** @type {(inputs: Account_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的账号`)
};

const en_account_title = /** @type {(inputs: Account_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My account`)
};

/**
* | output |
* | --- |
* | "My account" |
*
* @param {Account_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_title = /** @type {((inputs?: Account_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_title(inputs)
	return zh_account_title(inputs)
});