/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_LogoutInputs */

const zh_admin_sidebar_logout = /** @type {(inputs: Admin_Sidebar_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const en_admin_sidebar_logout = /** @type {(inputs: Admin_Sidebar_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign Out`)
};

/**
* | output |
* | --- |
* | "Sign Out" |
*
* @param {Admin_Sidebar_LogoutInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout = /** @type {((inputs?: Admin_Sidebar_LogoutInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_LogoutInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout(inputs)
	return zh_admin_sidebar_logout(inputs)
});