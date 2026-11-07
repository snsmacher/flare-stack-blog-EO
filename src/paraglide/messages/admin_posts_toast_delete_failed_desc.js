/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Delete_Failed_DescInputs */

const zh_admin_posts_toast_delete_failed_desc = /** @type {(inputs: Admin_Posts_Toast_Delete_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章不存在或已被删除`)
};

const en_admin_posts_toast_delete_failed_desc = /** @type {(inputs: Admin_Posts_Toast_Delete_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The post doesn't exist or was already deleted`)
};

/**
* | output |
* | --- |
* | "The post doesn't exist or was already deleted" |
*
* @param {Admin_Posts_Toast_Delete_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_delete_failed_desc = /** @type {((inputs?: Admin_Posts_Toast_Delete_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Delete_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_delete_failed_desc(inputs)
	return zh_admin_posts_toast_delete_failed_desc(inputs)
});