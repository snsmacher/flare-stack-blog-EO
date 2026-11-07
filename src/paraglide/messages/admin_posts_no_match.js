/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_No_MatchInputs */

const zh_admin_posts_no_match = /** @type {(inputs: Admin_Posts_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的文章`)
};

const en_admin_posts_no_match = /** @type {(inputs: Admin_Posts_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No posts found`)
};

/**
* | output |
* | --- |
* | "No posts found" |
*
* @param {Admin_Posts_No_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_no_match = /** @type {((inputs?: Admin_Posts_No_MatchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_No_MatchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_no_match(inputs)
	return zh_admin_posts_no_match(inputs)
});