/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_Scope_Admin_LabelInputs */

const zh_settings_email_scope_admin_label = /** @type {(inputs: Settings_Email_Scope_Admin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员邮件通知`)
};

const en_settings_email_scope_admin_label = /** @type {(inputs: Settings_Email_Scope_Admin_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin Email Notifications`)
};

/**
* | output |
* | --- |
* | "Admin Email Notifications" |
*
* @param {Settings_Email_Scope_Admin_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_email_scope_admin_label = /** @type {((inputs?: Settings_Email_Scope_Admin_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Scope_Admin_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_email_scope_admin_label(inputs)
	return zh_settings_email_scope_admin_label(inputs)
});