/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Logout_FuwariInputs */

const zh_profile_logout_fuwari = /** @type {(inputs: Profile_Logout_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const en_profile_logout_fuwari = /** @type {(inputs: Profile_Logout_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign Out`)
};

/**
* | output |
* | --- |
* | "Sign Out" |
*
* @param {Profile_Logout_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_logout_fuwari = /** @type {((inputs?: Profile_Logout_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Logout_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_logout_fuwari(inputs)
	return zh_profile_logout_fuwari(inputs)
});