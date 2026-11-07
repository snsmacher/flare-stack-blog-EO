/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Manager_Create_CategoryInputs */

const zh_taxonomy_manager_create_category = /** @type {(inputs: Taxonomy_Manager_Create_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建分类`)
};

const en_taxonomy_manager_create_category = /** @type {(inputs: Taxonomy_Manager_Create_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New category`)
};

/**
* | output |
* | --- |
* | "New category" |
*
* @param {Taxonomy_Manager_Create_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_manager_create_category = /** @type {((inputs?: Taxonomy_Manager_Create_CategoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Manager_Create_CategoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_manager_create_category(inputs)
	return zh_taxonomy_manager_create_category(inputs)
});