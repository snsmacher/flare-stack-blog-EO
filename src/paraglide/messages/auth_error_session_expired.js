/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Session_ExpiredInputs */

const zh_auth_error_session_expired = /** @type {(inputs: Auth_Error_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录状态已过期，请重新登录。`)
};

const en_auth_error_session_expired = /** @type {(inputs: Auth_Error_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session has expired. Please sign in again.`)
};

/**
* | output |
* | --- |
* | "Your session has expired. Please sign in again." |
*
* @param {Auth_Error_Session_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_error_session_expired = /** @type {((inputs?: Auth_Error_Session_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Session_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_error_session_expired(inputs)
	return zh_auth_error_session_expired(inputs)
});