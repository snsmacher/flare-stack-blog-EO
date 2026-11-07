/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Logout_Failed_DescInputs */

const zh_admin_sidebar_logout_failed_desc = /** @type {(inputs: Admin_Sidebar_Logout_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请重试。`)
};

const en_admin_sidebar_logout_failed_desc = /** @type {(inputs: Admin_Sidebar_Logout_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again.`)
};

/**
* | output |
* | --- |
* | "Please try again." |
*
* @param {Admin_Sidebar_Logout_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_logout_failed_desc = /** @type {((inputs?: Admin_Sidebar_Logout_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Logout_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_logout_failed_desc(inputs)
	return zh_admin_sidebar_logout_failed_desc(inputs)
});