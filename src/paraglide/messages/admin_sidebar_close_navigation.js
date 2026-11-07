/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Close_NavigationInputs */

const zh_admin_sidebar_close_navigation = /** @type {(inputs: Admin_Sidebar_Close_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭导航`)
};

const en_admin_sidebar_close_navigation = /** @type {(inputs: Admin_Sidebar_Close_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close navigation`)
};

/**
* | output |
* | --- |
* | "Close navigation" |
*
* @param {Admin_Sidebar_Close_NavigationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_close_navigation = /** @type {((inputs?: Admin_Sidebar_Close_NavigationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Close_NavigationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_close_navigation(inputs)
	return zh_admin_sidebar_close_navigation(inputs)
});