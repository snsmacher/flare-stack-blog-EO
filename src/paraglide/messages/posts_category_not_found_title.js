/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Posts_Category_Not_Found_TitleInputs */

const zh_posts_category_not_found_title = /** @type {(inputs: Posts_Category_Not_Found_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`分类「${i?.name}」不存在`)
};

const en_posts_category_not_found_title = /** @type {(inputs: Posts_Category_Not_Found_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Category “${i?.name}” does not exist`)
};

/**
* | output |
* | --- |
* | "Category “{name}” does not exist" |
*
* @param {Posts_Category_Not_Found_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_category_not_found_title = /** @type {((inputs: Posts_Category_Not_Found_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_Category_Not_Found_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_category_not_found_title(inputs)
	return zh_posts_category_not_found_title(inputs)
});