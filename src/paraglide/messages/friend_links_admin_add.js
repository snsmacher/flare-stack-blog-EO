/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Admin_AddInputs */

const zh_friend_links_admin_add = /** @type {(inputs: Friend_Links_Admin_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const en_friend_links_admin_add = /** @type {(inputs: Friend_Links_Admin_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Friend_Links_Admin_AddInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_admin_add = /** @type {((inputs?: Friend_Links_Admin_AddInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Admin_AddInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_admin_add(inputs)
	return zh_friend_links_admin_add(inputs)
});