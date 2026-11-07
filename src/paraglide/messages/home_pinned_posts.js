/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Pinned_PostsInputs */

const zh_home_pinned_posts = /** @type {(inputs: Home_Pinned_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶`)
};

const en_home_pinned_posts = /** @type {(inputs: Home_Pinned_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned`)
};

/**
* | output |
* | --- |
* | "Pinned" |
*
* @param {Home_Pinned_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const home_pinned_posts = /** @type {((inputs?: Home_Pinned_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pinned_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_home_pinned_posts(inputs)
	return zh_home_pinned_posts(inputs)
});