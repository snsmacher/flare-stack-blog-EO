/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_BackInputs */

const zh_account_back = /** @type {(inputs: Account_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回博客`)
};

const en_account_back = /** @type {(inputs: Account_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to blog`)
};

/**
* | output |
* | --- |
* | "Back to blog" |
*
* @param {Account_BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_back = /** @type {((inputs?: Account_BackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_BackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_back(inputs)
	return zh_account_back(inputs)
});