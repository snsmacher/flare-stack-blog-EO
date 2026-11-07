/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_Friend_LinksInputs */

const zh_admin_sidebar_friend_links = /** @type {(inputs: Admin_Sidebar_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链管理`)
};

const en_admin_sidebar_friend_links = /** @type {(inputs: Admin_Sidebar_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

/**
* | output |
* | --- |
* | "Links" |
*
* @param {Admin_Sidebar_Friend_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_friend_links = /** @type {((inputs?: Admin_Sidebar_Friend_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_Friend_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_friend_links(inputs)
	return zh_admin_sidebar_friend_links(inputs)
});