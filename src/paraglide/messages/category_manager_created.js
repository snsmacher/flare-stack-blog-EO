/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Category_Manager_CreatedInputs */

const zh_category_manager_created = /** @type {(inputs: Category_Manager_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建成功`)
};

const en_category_manager_created = /** @type {(inputs: Category_Manager_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created`)
};

/**
* | output |
* | --- |
* | "Created" |
*
* @param {Category_Manager_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const category_manager_created = /** @type {((inputs?: Category_Manager_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Category_Manager_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_category_manager_created(inputs)
	return zh_category_manager_created(inputs)
});