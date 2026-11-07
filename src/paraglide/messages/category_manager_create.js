/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_CreateInputs */

const zh_category_manager_create = /** @type {(inputs: Category_Manager_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建`)
};

const en_category_manager_create = /** @type {(inputs: Category_Manager_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create`)
};

/**
* | output |
* | --- |
* | "Create" |
*
* @param {Category_Manager_CreateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_create = /** @type {((inputs?: Category_Manager_CreateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_CreateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_create(inputs)
	return zh_category_manager_create(inputs)
});