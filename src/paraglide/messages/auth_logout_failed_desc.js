/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_Failed_DescInputs */

const zh_auth_logout_failed_desc = /** @type {(inputs: Auth_Logout_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后重试。`)
};

const en_auth_logout_failed_desc = /** @type {(inputs: Auth_Logout_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again later.`)
};

/**
* | output |
* | --- |
* | "Please try again later." |
*
* @param {Auth_Logout_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_logout_failed_desc = /** @type {((inputs?: Auth_Logout_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_logout_failed_desc(inputs)
	return zh_auth_logout_failed_desc(inputs)
});