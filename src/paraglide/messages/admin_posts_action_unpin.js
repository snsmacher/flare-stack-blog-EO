/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Action_UnpinInputs */

const zh_admin_posts_action_unpin = /** @type {(inputs: Admin_Posts_Action_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消置顶`)
};

const en_admin_posts_action_unpin = /** @type {(inputs: Admin_Posts_Action_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpin`)
};

/**
* | output |
* | --- |
* | "Unpin" |
*
* @param {Admin_Posts_Action_UnpinInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_action_unpin = /** @type {((inputs?: Admin_Posts_Action_UnpinInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Action_UnpinInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_action_unpin(inputs)
	return zh_admin_posts_action_unpin(inputs)
});