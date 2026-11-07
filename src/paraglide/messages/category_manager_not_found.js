/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_Not_FoundInputs */

const zh_category_manager_not_found = /** @type {(inputs: Category_Manager_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类不存在`)
};

const en_category_manager_not_found = /** @type {(inputs: Category_Manager_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category not found`)
};

/**
* | output |
* | --- |
* | "Category not found" |
*
* @param {Category_Manager_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_not_found = /** @type {((inputs?: Category_Manager_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_not_found(inputs)
	return zh_category_manager_not_found(inputs)
});