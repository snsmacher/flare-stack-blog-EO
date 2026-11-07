/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_Name_ExistsInputs */

const zh_category_manager_name_exists = /** @type {(inputs: Category_Manager_Name_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类名称已存在`)
};

const en_category_manager_name_exists = /** @type {(inputs: Category_Manager_Name_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This name is already in use`)
};

/**
* | output |
* | --- |
* | "This name is already in use" |
*
* @param {Category_Manager_Name_ExistsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_name_exists = /** @type {((inputs?: Category_Manager_Name_ExistsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_Name_ExistsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_name_exists(inputs)
	return zh_category_manager_name_exists(inputs)
});