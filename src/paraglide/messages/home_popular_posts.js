/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Popular_PostsInputs */

const zh_home_popular_posts = /** @type {(inputs: Home_Popular_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门`)
};

const en_home_popular_posts = /** @type {(inputs: Home_Popular_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popular`)
};

/**
* | output |
* | --- |
* | "Popular" |
*
* @param {Home_Popular_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_popular_posts = /** @type {((inputs?: Home_Popular_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Popular_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_popular_posts(inputs)
	return zh_home_popular_posts(inputs)
});