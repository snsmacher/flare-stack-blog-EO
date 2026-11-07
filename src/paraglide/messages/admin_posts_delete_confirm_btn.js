/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Delete_Confirm_BtnInputs */

const zh_admin_posts_delete_confirm_btn = /** @type {(inputs: Admin_Posts_Delete_Confirm_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const en_admin_posts_delete_confirm_btn = /** @type {(inputs: Admin_Posts_Delete_Confirm_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Posts_Delete_Confirm_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_delete_confirm_btn = /** @type {((inputs?: Admin_Posts_Delete_Confirm_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Delete_Confirm_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_delete_confirm_btn(inputs)
	return zh_admin_posts_delete_confirm_btn(inputs)
});