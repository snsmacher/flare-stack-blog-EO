/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Remove_Email_HintInputs */

const zh_settings_design_remove_email_hint = /** @type {(inputs: Settings_Design_Remove_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存通知设置后将移除邮件密码，邮件发送将不可用。替换密码无需先移除。`)
};

const en_settings_design_remove_email_hint = /** @type {(inputs: Settings_Design_Remove_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving notification settings will remove the email password and disable email delivery. You do not need to remove it before replacing it.`)
};

/**
* | output |
* | --- |
* | "Saving notification settings will remove the email password and disable email delivery. You do not need to remove it before replacing it." |
*
* @param {Settings_Design_Remove_Email_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_remove_email_hint = /** @type {((inputs?: Settings_Design_Remove_Email_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Remove_Email_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_remove_email_hint(inputs)
	return zh_settings_design_remove_email_hint(inputs)
});