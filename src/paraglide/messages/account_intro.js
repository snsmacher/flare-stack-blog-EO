/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_IntroInputs */

const zh_account_intro = /** @type {(inputs: Account_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理你的公开资料与账号偏好。`)
};

const en_account_intro = /** @type {(inputs: Account_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage your public profile and account preferences.`)
};

/**
* | output |
* | --- |
* | "Manage your public profile and account preferences." |
*
* @param {Account_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_intro = /** @type {((inputs?: Account_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_intro(inputs)
	return zh_account_intro(inputs)
});