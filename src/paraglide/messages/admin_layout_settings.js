/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Layout_SettingsInputs */

const zh_admin_layout_settings = /** @type {(inputs: Admin_Layout_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统设置`)
};

const en_admin_layout_settings = /** @type {(inputs: Admin_Layout_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Admin_Layout_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_layout_settings = /** @type {((inputs?: Admin_Layout_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Layout_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_layout_settings(inputs)
	return zh_admin_layout_settings(inputs)
});