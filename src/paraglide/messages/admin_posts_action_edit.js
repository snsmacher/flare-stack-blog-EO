/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Action_EditInputs */

const zh_admin_posts_action_edit = /** @type {(inputs: Admin_Posts_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const en_admin_posts_action_edit = /** @type {(inputs: Admin_Posts_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Admin_Posts_Action_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_action_edit = /** @type {((inputs?: Admin_Posts_Action_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Action_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_action_edit(inputs)
	return zh_admin_posts_action_edit(inputs)
});