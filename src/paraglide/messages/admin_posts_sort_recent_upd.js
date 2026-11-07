/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Sort_Recent_UpdInputs */

const zh_admin_posts_sort_recent_upd = /** @type {(inputs: Admin_Posts_Sort_Recent_UpdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近修改`)
};

const en_admin_posts_sort_recent_upd = /** @type {(inputs: Admin_Posts_Sort_Recent_UpdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent Updated`)
};

/**
* | output |
* | --- |
* | "Recent Updated" |
*
* @param {Admin_Posts_Sort_Recent_UpdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_sort_recent_upd = /** @type {((inputs?: Admin_Posts_Sort_Recent_UpdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Sort_Recent_UpdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_sort_recent_upd(inputs)
	return zh_admin_posts_sort_recent_upd(inputs)
});