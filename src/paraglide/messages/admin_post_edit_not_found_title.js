/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Post_Edit_Not_Found_TitleInputs */

const zh_admin_post_edit_not_found_title = /** @type {(inputs: Admin_Post_Edit_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到文章`)
};

const en_admin_post_edit_not_found_title = /** @type {(inputs: Admin_Post_Edit_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post Not Found`)
};

/**
* | output |
* | --- |
* | "Post Not Found" |
*
* @param {Admin_Post_Edit_Not_Found_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_post_edit_not_found_title = /** @type {((inputs?: Admin_Post_Edit_Not_Found_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Post_Edit_Not_Found_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_post_edit_not_found_title(inputs)
	return zh_admin_post_edit_not_found_title(inputs)
});