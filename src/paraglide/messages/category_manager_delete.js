/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_DeleteInputs */

const zh_category_manager_delete = /** @type {(inputs: Category_Manager_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const en_category_manager_delete = /** @type {(inputs: Category_Manager_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Category_Manager_DeleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_delete = /** @type {((inputs?: Category_Manager_DeleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_DeleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_delete(inputs)
	return zh_category_manager_delete(inputs)
});