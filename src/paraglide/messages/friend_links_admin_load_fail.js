/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Admin_Load_FailInputs */

const zh_friend_links_admin_load_fail = /** @type {(inputs: Friend_Links_Admin_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载友链列表失败`)
};

const en_friend_links_admin_load_fail = /** @type {(inputs: Friend_Links_Admin_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to load friend links`)
};

/**
* | output |
* | --- |
* | "Failed to load friend links" |
*
* @param {Friend_Links_Admin_Load_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_admin_load_fail = /** @type {((inputs?: Friend_Links_Admin_Load_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Admin_Load_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_admin_load_fail(inputs)
	return zh_friend_links_admin_load_fail(inputs)
});