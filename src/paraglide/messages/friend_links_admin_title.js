/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Admin_TitleInputs */

const zh_friend_links_admin_title = /** @type {(inputs: Friend_Links_Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链管理`)
};

const en_friend_links_admin_title = /** @type {(inputs: Friend_Links_Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend Links`)
};

/**
* | output |
* | --- |
* | "Friend Links" |
*
* @param {Friend_Links_Admin_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_admin_title = /** @type {((inputs?: Friend_Links_Admin_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Admin_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_admin_title(inputs)
	return zh_friend_links_admin_title(inputs)
});