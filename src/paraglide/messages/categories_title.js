/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Categories_TitleInputs */

const zh_categories_title = /** @type {(inputs: Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const en_categories_title = /** @type {(inputs: Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories`)
};

/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Categories_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const categories_title = /** @type {((inputs?: Categories_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Categories_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_categories_title(inputs)
	return zh_categories_title(inputs)
});