/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Manage_TaxonomyInputs */

const zh_admin_posts_manage_taxonomy = /** @type {(inputs: Admin_Posts_Manage_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理分类与标签`)
};

const en_admin_posts_manage_taxonomy = /** @type {(inputs: Admin_Posts_Manage_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage categories and tags`)
};

/**
* | output |
* | --- |
* | "Manage categories and tags" |
*
* @param {Admin_Posts_Manage_TaxonomyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_manage_taxonomy = /** @type {((inputs?: Admin_Posts_Manage_TaxonomyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Manage_TaxonomyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_manage_taxonomy(inputs)
	return zh_admin_posts_manage_taxonomy(inputs)
});