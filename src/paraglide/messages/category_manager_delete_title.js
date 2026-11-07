/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_Delete_TitleInputs */

const zh_category_manager_delete_title = /** @type {(inputs: Category_Manager_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除分类`)
};

const en_category_manager_delete_title = /** @type {(inputs: Category_Manager_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete category`)
};

/**
* | output |
* | --- |
* | "Delete category" |
*
* @param {Category_Manager_Delete_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_delete_title = /** @type {((inputs?: Category_Manager_Delete_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_Delete_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_delete_title(inputs)
	return zh_category_manager_delete_title(inputs)
});