/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Layout_Open_NavigationInputs */

const zh_admin_layout_open_navigation = /** @type {(inputs: Admin_Layout_Open_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开导航`)
};

const en_admin_layout_open_navigation = /** @type {(inputs: Admin_Layout_Open_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open navigation`)
};

/**
* | output |
* | --- |
* | "Open navigation" |
*
* @param {Admin_Layout_Open_NavigationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_layout_open_navigation = /** @type {((inputs?: Admin_Layout_Open_NavigationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Layout_Open_NavigationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_layout_open_navigation(inputs)
	return zh_admin_layout_open_navigation(inputs)
});