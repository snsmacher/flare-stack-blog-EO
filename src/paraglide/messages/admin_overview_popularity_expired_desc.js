/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Popularity_Expired_DescInputs */

const zh_admin_overview_popularity_expired_desc = /** @type {(inputs: Admin_Overview_Popularity_Expired_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超过 7 天没有同步，首页热门已改用置顶和最新文章`)
};

const en_admin_overview_popularity_expired_desc = /** @type {(inputs: Admin_Overview_Popularity_Expired_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not synced for over 7 days; the homepage shows pinned and recent posts instead`)
};

/**
* | output |
* | --- |
* | "Not synced for over 7 days; the homepage shows pinned and recent posts instead" |
*
* @param {Admin_Overview_Popularity_Expired_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_popularity_expired_desc = /** @type {((inputs?: Admin_Overview_Popularity_Expired_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Popularity_Expired_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_popularity_expired_desc(inputs)
	return zh_admin_overview_popularity_expired_desc(inputs)
});