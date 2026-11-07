/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Layout_TitleInputs */

const zh_admin_layout_title = /** @type {(inputs: Admin_Layout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理后台`)
};

const en_admin_layout_title = /** @type {(inputs: Admin_Layout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Admin_Layout_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_layout_title = /** @type {((inputs?: Admin_Layout_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Layout_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_layout_title(inputs)
	return zh_admin_layout_title(inputs)
});