/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_TitleInputs */

const zh_admin_sidebar_logout_title = /** @type {(inputs: Admin_Sidebar_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认退出`)
};

const en_admin_sidebar_logout_title = /** @type {(inputs: Admin_Sidebar_Logout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign Out`)
};

/**
* | output |
* | --- |
* | "Sign Out" |
*
* @param {Admin_Sidebar_Logout_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_title = /** @type {((inputs?: Admin_Sidebar_Logout_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_title(inputs)
	return zh_admin_sidebar_logout_title(inputs)
});