/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_EmailInputs */

const zh_settings_tab_email = /** @type {(inputs: Settings_Tab_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮件配置`)
};

const en_settings_tab_email = /** @type {(inputs: Settings_Tab_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

/**
* | output |
* | --- |
* | "Email" |
*
* @param {Settings_Tab_EmailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_tab_email = /** @type {((inputs?: Settings_Tab_EmailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_EmailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_email(inputs)
	return zh_settings_tab_email(inputs)
});