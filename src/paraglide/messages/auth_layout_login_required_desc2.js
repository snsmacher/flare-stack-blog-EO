/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Login_Required_Desc2Inputs */

const zh_auth_layout_login_required_desc2 = /** @type {(inputs: Auth_Layout_Login_Required_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后即可继续操作。`)
};

const en_auth_layout_login_required_desc2 = /** @type {(inputs: Auth_Layout_Login_Required_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please sign in to continue.`)
};

/**
* | output |
* | --- |
* | "Please sign in to continue." |
*
* @param {Auth_Layout_Login_Required_Desc2Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_layout_login_required_desc2 = /** @type {((inputs?: Auth_Layout_Login_Required_Desc2Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Login_Required_Desc2Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_layout_login_required_desc2(inputs)
	return zh_auth_layout_login_required_desc2(inputs)
});