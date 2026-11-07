/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Admin_FallbackInputs */

const zh_admin_sidebar_admin_fallback = /** @type {(inputs: Admin_Sidebar_Admin_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员`)
};

const en_admin_sidebar_admin_fallback = /** @type {(inputs: Admin_Sidebar_Admin_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Admin_Sidebar_Admin_FallbackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_admin_fallback = /** @type {((inputs?: Admin_Sidebar_Admin_FallbackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Admin_FallbackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_admin_fallback(inputs)
	return zh_admin_sidebar_admin_fallback(inputs)
});