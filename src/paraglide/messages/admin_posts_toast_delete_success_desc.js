/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Admin_Posts_Toast_Delete_Success_DescInputs */

const zh_admin_posts_toast_delete_success_desc = /** @type {(inputs: Admin_Posts_Toast_Delete_Success_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除「${i?.title}」`)
};

const en_admin_posts_toast_delete_success_desc = /** @type {(inputs: Admin_Posts_Toast_Delete_Success_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted "${i?.title}"`)
};

/**
* | output |
* | --- |
* | "Deleted \"{title}\"" |
*
* @param {Admin_Posts_Toast_Delete_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_delete_success_desc = /** @type {((inputs: Admin_Posts_Toast_Delete_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Delete_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_delete_success_desc(inputs)
	return zh_admin_posts_toast_delete_success_desc(inputs)
});