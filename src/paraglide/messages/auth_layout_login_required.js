/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Login_RequiredInputs */

const zh_auth_layout_login_required = /** @type {(inputs: Auth_Layout_Login_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先登录`)
};

const en_auth_layout_login_required = /** @type {(inputs: Auth_Layout_Login_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please Sign In`)
};

/**
* | output |
* | --- |
* | "Please Sign In" |
*
* @param {Auth_Layout_Login_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_layout_login_required = /** @type {((inputs?: Auth_Layout_Login_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Login_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_layout_login_required(inputs)
	return zh_auth_layout_login_required(inputs)
});