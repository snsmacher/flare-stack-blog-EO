/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_ExpandInputs */

const zh_admin_sidebar_expand = /** @type {(inputs: Admin_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展开侧边栏`)
};

const en_admin_sidebar_expand = /** @type {(inputs: Admin_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expand sidebar`)
};

/**
* | output |
* | --- |
* | "Expand sidebar" |
*
* @param {Admin_Sidebar_ExpandInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_expand = /** @type {((inputs?: Admin_Sidebar_ExpandInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_ExpandInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_expand(inputs)
	return zh_admin_sidebar_expand(inputs)
});