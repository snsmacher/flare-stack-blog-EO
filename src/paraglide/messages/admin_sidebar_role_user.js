/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Role_UserInputs */

const zh_admin_sidebar_role_user = /** @type {(inputs: Admin_Sidebar_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const en_admin_sidebar_role_user = /** @type {(inputs: Admin_Sidebar_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Sidebar_Role_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_role_user = /** @type {((inputs?: Admin_Sidebar_Role_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Role_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_role_user(inputs)
	return zh_admin_sidebar_role_user(inputs)
});