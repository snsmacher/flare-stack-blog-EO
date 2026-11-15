/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Email_Needs_SetupInputs */

const zh_admin_overview_email_needs_setup = /** @type {(inputs: Admin_Overview_Email_Needs_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知邮箱尚未设置`)
};

const en_admin_overview_email_needs_setup = /** @type {(inputs: Admin_Overview_Email_Needs_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The notification email is not set`)
};

/**
* | output |
* | --- |
* | "The notification email is not set" |
*
* @param {Admin_Overview_Email_Needs_SetupInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_email_needs_setup = /** @type {((inputs?: Admin_Overview_Email_Needs_SetupInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Email_Needs_SetupInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_email_needs_setup(inputs)
	return zh_admin_overview_email_needs_setup(inputs)
});