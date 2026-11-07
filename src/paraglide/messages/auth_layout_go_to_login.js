/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Go_To_LoginInputs */

const zh_auth_layout_go_to_login = /** @type {(inputs: Auth_Layout_Go_To_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往登录`)
};

const en_auth_layout_go_to_login = /** @type {(inputs: Auth_Layout_Go_To_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Login`)
};

/**
* | output |
* | --- |
* | "Go to Login" |
*
* @param {Auth_Layout_Go_To_LoginInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_layout_go_to_login = /** @type {((inputs?: Auth_Layout_Go_To_LoginInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Go_To_LoginInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_layout_go_to_login(inputs)
	return zh_auth_layout_go_to_login(inputs)
});