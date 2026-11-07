/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Layout_Back_To_SiteInputs */

const zh_admin_layout_back_to_site = /** @type {(inputs: Admin_Layout_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回前台`)
};

const en_admin_layout_back_to_site = /** @type {(inputs: Admin_Layout_Back_To_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Site`)
};

/**
* | output |
* | --- |
* | "Back to Site" |
*
* @param {Admin_Layout_Back_To_SiteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_layout_back_to_site = /** @type {((inputs?: Admin_Layout_Back_To_SiteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Layout_Back_To_SiteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_layout_back_to_site(inputs)
	return zh_admin_layout_back_to_site(inputs)
});