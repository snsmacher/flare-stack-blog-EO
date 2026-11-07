/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Admin_Post_Edit_Not_Found_DescInputs */

const zh_admin_post_edit_not_found_desc = /** @type {(inputs: Admin_Post_Edit_Not_Found_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ID 为 ${i?.id} 的文章记录不存在或已被移除。`)
};

const en_admin_post_edit_not_found_desc = /** @type {(inputs: Admin_Post_Edit_Not_Found_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The post record with ID ${i?.id} does not exist or has been removed.`)
};

/**
* | output |
* | --- |
* | "The post record with ID {id} does not exist or has been removed." |
*
* @param {Admin_Post_Edit_Not_Found_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_post_edit_not_found_desc = /** @type {((inputs: Admin_Post_Edit_Not_Found_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Post_Edit_Not_Found_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_post_edit_not_found_desc(inputs)
	return zh_admin_post_edit_not_found_desc(inputs)
});