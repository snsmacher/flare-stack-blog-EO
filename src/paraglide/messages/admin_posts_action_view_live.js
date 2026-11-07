/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Action_View_LiveInputs */

const zh_admin_posts_action_view_live = /** @type {(inputs: Admin_Posts_Action_View_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看线上页面`)
};

const en_admin_posts_action_view_live = /** @type {(inputs: Admin_Posts_Action_View_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View Live Page`)
};

/**
* | output |
* | --- |
* | "View Live Page" |
*
* @param {Admin_Posts_Action_View_LiveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_action_view_live = /** @type {((inputs?: Admin_Posts_Action_View_LiveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Action_View_LiveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_action_view_live(inputs)
	return zh_admin_posts_action_view_live(inputs)
});