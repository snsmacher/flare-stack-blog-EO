/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Posts_Category_Not_Found_DescInputs */

const zh_posts_category_not_found_desc = /** @type {(inputs: Posts_Category_Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该分类不存在，或其下没有已发布的文章。`)
};

const en_posts_category_not_found_desc = /** @type {(inputs: Posts_Category_Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This category does not exist, or no published post belongs to it.`)
};

/**
* | output |
* | --- |
* | "This category does not exist, or no published post belongs to it." |
*
* @param {Posts_Category_Not_Found_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_category_not_found_desc = /** @type {((inputs?: Posts_Category_Not_Found_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_Category_Not_Found_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_category_not_found_desc(inputs)
	return zh_posts_category_not_found_desc(inputs)
});