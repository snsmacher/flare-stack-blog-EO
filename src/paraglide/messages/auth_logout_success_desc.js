/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_Success_DescInputs */

const zh_auth_logout_success_desc = /** @type {(inputs: Auth_Logout_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期待再次相见。`)
};

const en_auth_logout_success_desc = /** @type {(inputs: Auth_Logout_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See you again soon.`)
};

/**
* | output |
* | --- |
* | "See you again soon." |
*
* @param {Auth_Logout_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_logout_success_desc = /** @type {((inputs?: Auth_Logout_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_logout_success_desc(inputs)
	return zh_auth_logout_success_desc(inputs)
});