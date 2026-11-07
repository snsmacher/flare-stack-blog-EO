/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Email_HintInputs */

const zh_settings_design_email_hint = /** @type {(inputs: Settings_Design_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择邮件通知的接收对象，配置发送账号。`)
};

const en_settings_design_email_hint = /** @type {(inputs: Settings_Design_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose notification recipients and configure the sending account.`)
};

/**
* | output |
* | --- |
* | "Choose notification recipients and configure the sending account." |
*
* @param {Settings_Design_Email_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_email_hint = /** @type {((inputs?: Settings_Design_Email_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Email_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_email_hint(inputs)
	return zh_settings_design_email_hint(inputs)
});