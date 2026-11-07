/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_User_Not_FoundInputs */

const zh_auth_error_user_not_found = /** @type {(inputs: Auth_Error_User_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到对应的用户账号。`)
};

const en_auth_error_user_not_found = /** @type {(inputs: Auth_Error_User_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No account was found for this user.`)
};

/**
* | output |
* | --- |
* | "No account was found for this user." |
*
* @param {Auth_Error_User_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_error_user_not_found = /** @type {((inputs?: Auth_Error_User_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_User_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_error_user_not_found(inputs)
	return zh_auth_error_user_not_found(inputs)
});