/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_FailedInputs */

const zh_admin_sidebar_logout_failed = /** @type {(inputs: Admin_Sidebar_Logout_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注销失败`)
};

const en_admin_sidebar_logout_failed = /** @type {(inputs: Admin_Sidebar_Logout_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out failed`)
};

/**
* | output |
* | --- |
* | "Sign out failed" |
*
* @param {Admin_Sidebar_Logout_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_failed = /** @type {((inputs?: Admin_Sidebar_Logout_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_failed(inputs)
	return zh_admin_sidebar_logout_failed(inputs)
});