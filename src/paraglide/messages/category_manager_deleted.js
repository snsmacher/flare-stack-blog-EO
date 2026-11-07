/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_DeletedInputs */

const zh_category_manager_deleted = /** @type {(inputs: Category_Manager_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除成功`)
};

const en_category_manager_deleted = /** @type {(inputs: Category_Manager_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted`)
};

/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Category_Manager_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_deleted = /** @type {((inputs?: Category_Manager_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_deleted(inputs)
	return zh_category_manager_deleted(inputs)
});