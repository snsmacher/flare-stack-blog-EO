/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_SaveInputs */

const zh_category_manager_save = /** @type {(inputs: Category_Manager_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const en_category_manager_save = /** @type {(inputs: Category_Manager_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Category_Manager_SaveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_save = /** @type {((inputs?: Category_Manager_SaveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_SaveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_save(inputs)
	return zh_category_manager_save(inputs)
});