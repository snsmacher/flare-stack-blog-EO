/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_CollapseInputs */

const zh_admin_sidebar_collapse = /** @type {(inputs: Admin_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起侧边栏`)
};

const en_admin_sidebar_collapse = /** @type {(inputs: Admin_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse sidebar`)
};

/**
* | output |
* | --- |
* | "Collapse sidebar" |
*
* @param {Admin_Sidebar_CollapseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_collapse = /** @type {((inputs?: Admin_Sidebar_CollapseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_CollapseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_collapse(inputs)
	return zh_admin_sidebar_collapse(inputs)
});