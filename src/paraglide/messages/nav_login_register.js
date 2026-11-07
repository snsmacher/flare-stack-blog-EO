/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Login_RegisterInputs */

const zh_nav_login_register = /** @type {(inputs: Nav_Login_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const en_nav_login_register = /** @type {(inputs: Nav_Login_RegisterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign In`)
};

/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Nav_Login_RegisterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const nav_login_register = /** @type {((inputs?: Nav_Login_RegisterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Login_RegisterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_login_register(inputs)
	return zh_nav_login_register(inputs)
});