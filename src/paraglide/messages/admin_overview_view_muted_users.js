/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_View_Muted_UsersInputs */

const zh_admin_overview_view_muted_users = /** @type {(inputs: Admin_Overview_View_Muted_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看禁言名单`)
};

const en_admin_overview_view_muted_users = /** @type {(inputs: Admin_Overview_View_Muted_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View muted users`)
};

/**
* | output |
* | --- |
* | "View muted users" |
*
* @param {Admin_Overview_View_Muted_UsersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_view_muted_users = /** @type {((inputs?: Admin_Overview_View_Muted_UsersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_View_Muted_UsersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_view_muted_users(inputs)
	return zh_admin_overview_view_muted_users(inputs)
});