/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Email_Needs_Setup_DescInputs */

const zh_admin_overview_email_needs_setup_desc = /** @type {(inputs: Admin_Overview_Email_Needs_Setup_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新评论和友链申请不会发邮件提醒你`)
};

const en_admin_overview_email_needs_setup_desc = /** @type {(inputs: Admin_Overview_Email_Needs_Setup_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You won't get emails about new comments or friend link requests`)
};

/**
* | output |
* | --- |
* | "You won't get emails about new comments or friend link requests" |
*
* @param {Admin_Overview_Email_Needs_Setup_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_email_needs_setup_desc = /** @type {((inputs?: Admin_Overview_Email_Needs_Setup_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Email_Needs_Setup_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_email_needs_setup_desc(inputs)
	return zh_admin_overview_email_needs_setup_desc(inputs)
});