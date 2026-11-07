/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Role_AdminInputs */

const zh_admin_sidebar_role_admin = /** @type {(inputs: Admin_Sidebar_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员`)
};

const en_admin_sidebar_role_admin = /** @type {(inputs: Admin_Sidebar_Role_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrator`)
};

/**
* | output |
* | --- |
* | "Administrator" |
*
* @param {Admin_Sidebar_Role_AdminInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_role_admin = /** @type {((inputs?: Admin_Sidebar_Role_AdminInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Role_AdminInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_role_admin(inputs)
	return zh_admin_sidebar_role_admin(inputs)
});