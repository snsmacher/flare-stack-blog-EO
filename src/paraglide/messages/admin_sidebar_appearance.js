/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_AppearanceInputs */

const zh_admin_sidebar_appearance = /** @type {(inputs: Admin_Sidebar_AppearanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外观主题`)
};

const en_admin_sidebar_appearance = /** @type {(inputs: Admin_Sidebar_AppearanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance`)
};

/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {Admin_Sidebar_AppearanceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_appearance = /** @type {((inputs?: Admin_Sidebar_AppearanceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_AppearanceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_appearance(inputs)
	return zh_admin_sidebar_appearance(inputs)
});