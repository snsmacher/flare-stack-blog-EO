/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_TitleInputs */

const zh_login_title = /** @type {(inputs: Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const en_login_title = /** @type {(inputs: Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Login`)
};

/**
* | output |
* | --- |
* | "Login" |
*
* @param {Login_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_title = /** @type {((inputs?: Login_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_title(inputs)
	return zh_login_title(inputs)
});