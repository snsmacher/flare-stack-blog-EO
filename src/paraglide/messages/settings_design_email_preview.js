/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Email_PreviewInputs */

const zh_settings_design_email_preview = /** @type {(inputs: Settings_Design_Email_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮件预览`)
};

const en_settings_design_email_preview = /** @type {(inputs: Settings_Design_Email_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email preview`)
};

/**
* | output |
* | --- |
* | "Email preview" |
*
* @param {Settings_Design_Email_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_email_preview = /** @type {((inputs?: Settings_Design_Email_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Email_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_email_preview(inputs)
	return zh_settings_design_email_preview(inputs)
});