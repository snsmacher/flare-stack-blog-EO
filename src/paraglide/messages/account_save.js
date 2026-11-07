/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_SaveInputs */

const zh_account_save = /** @type {(inputs: Account_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存资料`)
};

const en_account_save = /** @type {(inputs: Account_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save profile`)
};

/**
* | output |
* | --- |
* | "Save profile" |
*
* @param {Account_SaveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_save = /** @type {((inputs?: Account_SaveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_SaveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_save(inputs)
	return zh_account_save(inputs)
});