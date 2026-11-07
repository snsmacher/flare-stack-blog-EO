/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_ConfirmInputs */

const zh_admin_sidebar_logout_confirm = /** @type {(inputs: Admin_Sidebar_Logout_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认退出`)
};

const en_admin_sidebar_logout_confirm = /** @type {(inputs: Admin_Sidebar_Logout_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign Out`)
};

/**
* | output |
* | --- |
* | "Sign Out" |
*
* @param {Admin_Sidebar_Logout_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_confirm = /** @type {((inputs?: Admin_Sidebar_Logout_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_confirm(inputs)
	return zh_admin_sidebar_logout_confirm(inputs)
});