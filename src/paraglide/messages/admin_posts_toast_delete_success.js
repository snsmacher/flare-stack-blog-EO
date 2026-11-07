/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Delete_SuccessInputs */

const zh_admin_posts_toast_delete_success = /** @type {(inputs: Admin_Posts_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除成功`)
};

const en_admin_posts_toast_delete_success = /** @type {(inputs: Admin_Posts_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted`)
};

/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Admin_Posts_Toast_Delete_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_delete_success = /** @type {((inputs?: Admin_Posts_Toast_Delete_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Delete_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_delete_success(inputs)
	return zh_admin_posts_toast_delete_success(inputs)
});