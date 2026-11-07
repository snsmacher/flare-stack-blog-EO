/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Delete_Confirm_TitleInputs */

const zh_admin_posts_delete_confirm_title = /** @type {(inputs: Admin_Posts_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除文章`)
};

const en_admin_posts_delete_confirm_title = /** @type {(inputs: Admin_Posts_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete post`)
};

/**
* | output |
* | --- |
* | "Delete post" |
*
* @param {Admin_Posts_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_delete_confirm_title = /** @type {((inputs?: Admin_Posts_Delete_Confirm_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Delete_Confirm_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_delete_confirm_title(inputs)
	return zh_admin_posts_delete_confirm_title(inputs)
});