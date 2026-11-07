/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_SuccessInputs */

const zh_admin_sidebar_logout_success = /** @type {(inputs: Admin_Sidebar_Logout_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已退出登录`)
};

const en_admin_sidebar_logout_success = /** @type {(inputs: Admin_Sidebar_Logout_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signed out`)
};

/**
* | output |
* | --- |
* | "Signed out" |
*
* @param {Admin_Sidebar_Logout_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_success = /** @type {((inputs?: Admin_Sidebar_Logout_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_success(inputs)
	return zh_admin_sidebar_logout_success(inputs)
});