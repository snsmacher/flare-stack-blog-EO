/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_Unknown_ErrorInputs */

const zh_category_manager_unknown_error = /** @type {(inputs: Category_Manager_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请重试`)
};

const en_category_manager_unknown_error = /** @type {(inputs: Category_Manager_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Please try again.`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Please try again." |
*
* @param {Category_Manager_Unknown_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_unknown_error = /** @type {((inputs?: Category_Manager_Unknown_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_Unknown_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_unknown_error(inputs)
	return zh_category_manager_unknown_error(inputs)
});