/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_DashboardInputs */

const zh_admin_sidebar_dashboard = /** @type {(inputs: Admin_Sidebar_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概览`)
};

const en_admin_sidebar_dashboard = /** @type {(inputs: Admin_Sidebar_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview`)
};

/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Admin_Sidebar_DashboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_dashboard = /** @type {((inputs?: Admin_Sidebar_DashboardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_DashboardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_dashboard(inputs)
	return zh_admin_sidebar_dashboard(inputs)
});