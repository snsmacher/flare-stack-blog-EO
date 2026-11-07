/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_FailedInputs */

const zh_auth_logout_failed = /** @type {(inputs: Auth_Logout_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出失败`)
};

const en_auth_logout_failed = /** @type {(inputs: Auth_Logout_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign Out Failed`)
};

/**
* | output |
* | --- |
* | "Sign Out Failed" |
*
* @param {Auth_Logout_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_logout_failed = /** @type {((inputs?: Auth_Logout_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_logout_failed(inputs)
	return zh_auth_logout_failed(inputs)
});