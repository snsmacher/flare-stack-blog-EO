/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_MessageInputs */

const zh_admin_sidebar_logout_message = /** @type {(inputs: Admin_Sidebar_Logout_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您确定要结束当前管理会话并注销吗？`)
};

const en_admin_sidebar_logout_message = /** @type {(inputs: Admin_Sidebar_Logout_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to end this admin session and sign out?`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to end this admin session and sign out?" |
*
* @param {Admin_Sidebar_Logout_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_message = /** @type {((inputs?: Admin_Sidebar_Logout_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_message(inputs)
	return zh_admin_sidebar_logout_message(inputs)
});