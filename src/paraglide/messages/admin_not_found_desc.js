/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Not_Found_DescInputs */

const zh_admin_not_found_desc = /** @type {(inputs: Admin_Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前管理页面不存在，你可以返回概览或继续管理文章。`)
};

const en_admin_not_found_desc = /** @type {(inputs: Admin_Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This admin page does not exist. Return to the overview or continue managing posts.`)
};

/**
* | output |
* | --- |
* | "This admin page does not exist. Return to the overview or continue managing posts." |
*
* @param {Admin_Not_Found_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_not_found_desc = /** @type {((inputs?: Admin_Not_Found_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Not_Found_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_not_found_desc(inputs)
	return zh_admin_not_found_desc(inputs)
});