/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_SuccessInputs */

const zh_auth_logout_success = /** @type {(inputs: Auth_Logout_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已退出登录`)
};

const en_auth_logout_success = /** @type {(inputs: Auth_Logout_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signed Out`)
};

/**
* | output |
* | --- |
* | "Signed Out" |
*
* @param {Auth_Logout_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_logout_success = /** @type {((inputs?: Auth_Logout_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_logout_success(inputs)
	return zh_auth_logout_success(inputs)
});