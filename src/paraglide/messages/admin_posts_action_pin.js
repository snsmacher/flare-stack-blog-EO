/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Action_PinInputs */

const zh_admin_posts_action_pin = /** @type {(inputs: Admin_Posts_Action_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶`)
};

const en_admin_posts_action_pin = /** @type {(inputs: Admin_Posts_Action_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pin`)
};

/**
* | output |
* | --- |
* | "Pin" |
*
* @param {Admin_Posts_Action_PinInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_action_pin = /** @type {((inputs?: Admin_Posts_Action_PinInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Action_PinInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_action_pin(inputs)
	return zh_admin_posts_action_pin(inputs)
});