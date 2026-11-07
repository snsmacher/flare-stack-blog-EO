/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Posts_No_PostsInputs */

const zh_posts_no_posts = /** @type {(inputs: Posts_No_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无文章`)
};

const en_posts_no_posts = /** @type {(inputs: Posts_No_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No posts found`)
};

/**
* | output |
* | --- |
* | "No posts found" |
*
* @param {Posts_No_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_no_posts = /** @type {((inputs?: Posts_No_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_No_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_no_posts(inputs)
	return zh_posts_no_posts(inputs)
});