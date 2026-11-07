/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_IntroInputs */

const zh_settings_design_intro = /** @type {(inputs: Settings_Design_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理站点基础配置与系统功能`)
};

const en_settings_design_intro = /** @type {(inputs: Settings_Design_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage your site and system preferences.`)
};

/**
* | output |
* | --- |
* | "Manage your site and system preferences." |
*
* @param {Settings_Design_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_intro = /** @type {((inputs?: Settings_Design_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_intro(inputs)
	return zh_settings_design_intro(inputs)
});