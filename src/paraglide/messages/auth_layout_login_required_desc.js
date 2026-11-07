/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Login_Required_DescInputs */

const zh_auth_layout_login_required_desc = /** @type {(inputs: Auth_Layout_Login_Required_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该页面需要登录账号方可访问。`)
};

const en_auth_layout_login_required_desc = /** @type {(inputs: Auth_Layout_Login_Required_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to sign in to access this page.`)
};

/**
* | output |
* | --- |
* | "You need to sign in to access this page." |
*
* @param {Auth_Layout_Login_Required_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_layout_login_required_desc = /** @type {((inputs?: Auth_Layout_Login_Required_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Login_Required_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_layout_login_required_desc(inputs)
	return zh_auth_layout_login_required_desc(inputs)
});