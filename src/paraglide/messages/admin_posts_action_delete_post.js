/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Action_Delete_PostInputs */

const zh_admin_posts_action_delete_post = /** @type {(inputs: Admin_Posts_Action_Delete_PostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除文章`)
};

const en_admin_posts_action_delete_post = /** @type {(inputs: Admin_Posts_Action_Delete_PostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Post`)
};

/**
* | output |
* | --- |
* | "Delete Post" |
*
* @param {Admin_Posts_Action_Delete_PostInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_action_delete_post = /** @type {((inputs?: Admin_Posts_Action_Delete_PostInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Action_Delete_PostInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_action_delete_post(inputs)
	return zh_admin_posts_action_delete_post(inputs)
});