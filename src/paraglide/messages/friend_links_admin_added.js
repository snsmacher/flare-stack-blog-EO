/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Admin_AddedInputs */

const zh_friend_links_admin_added = /** @type {(inputs: Friend_Links_Admin_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员添加`)
};

const en_friend_links_admin_added = /** @type {(inputs: Friend_Links_Admin_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added by Admin`)
};

/**
* | output |
* | --- |
* | "Added by Admin" |
*
* @param {Friend_Links_Admin_AddedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_admin_added = /** @type {((inputs?: Friend_Links_Admin_AddedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Admin_AddedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_admin_added(inputs)
	return zh_friend_links_admin_added(inputs)
});