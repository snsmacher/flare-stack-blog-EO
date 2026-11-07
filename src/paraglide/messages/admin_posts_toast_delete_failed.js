/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Delete_FailedInputs */

const zh_admin_posts_toast_delete_failed = /** @type {(inputs: Admin_Posts_Toast_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败`)
};

const en_admin_posts_toast_delete_failed = /** @type {(inputs: Admin_Posts_Toast_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't delete`)
};

/**
* | output |
* | --- |
* | "Couldn't delete" |
*
* @param {Admin_Posts_Toast_Delete_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_delete_failed = /** @type {((inputs?: Admin_Posts_Toast_Delete_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Delete_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_delete_failed(inputs)
	return zh_admin_posts_toast_delete_failed(inputs)
});