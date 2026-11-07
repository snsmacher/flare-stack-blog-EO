/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Admin_Posts_Delete_Confirm_DescInputs */

const zh_admin_posts_delete_confirm_desc = /** @type {(inputs: Admin_Posts_Delete_Confirm_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定删除「${i?.title}」吗？此操作无法撤销。`)
};

const en_admin_posts_delete_confirm_desc = /** @type {(inputs: Admin_Posts_Delete_Confirm_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete "${i?.title}"? This cannot be undone.`)
};

/**
* | output |
* | --- |
* | "Delete \"{title}\"? This cannot be undone." |
*
* @param {Admin_Posts_Delete_Confirm_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_delete_confirm_desc = /** @type {((inputs: Admin_Posts_Delete_Confirm_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Delete_Confirm_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_delete_confirm_desc(inputs)
	return zh_admin_posts_delete_confirm_desc(inputs)
});