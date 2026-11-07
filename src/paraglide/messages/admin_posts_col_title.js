/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Col_TitleInputs */

const zh_admin_posts_col_title = /** @type {(inputs: Admin_Posts_Col_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章`)
};

const en_admin_posts_col_title = /** @type {(inputs: Admin_Posts_Col_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post`)
};

/**
* | output |
* | --- |
* | "Post" |
*
* @param {Admin_Posts_Col_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_col_title = /** @type {((inputs?: Admin_Posts_Col_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Col_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_col_title(inputs)
	return zh_admin_posts_col_title(inputs)
});