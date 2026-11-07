/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Admin_Dashboard_FuwariInputs */

const zh_profile_admin_dashboard_fuwari = /** @type {(inputs: Profile_Admin_Dashboard_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理后台`)
};

const en_profile_admin_dashboard_fuwari = /** @type {(inputs: Profile_Admin_Dashboard_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin Dashboard`)
};

/**
* | output |
* | --- |
* | "Admin Dashboard" |
*
* @param {Profile_Admin_Dashboard_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_admin_dashboard_fuwari = /** @type {((inputs?: Profile_Admin_Dashboard_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Admin_Dashboard_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_admin_dashboard_fuwari(inputs)
	return zh_profile_admin_dashboard_fuwari(inputs)
});