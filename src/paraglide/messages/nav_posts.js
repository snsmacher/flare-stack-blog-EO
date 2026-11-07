/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_PostsInputs */

const zh_nav_posts = /** @type {(inputs: Nav_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章`)
};

const en_nav_posts = /** @type {(inputs: Nav_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts`)
};

/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Nav_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const nav_posts = /** @type {((inputs?: Nav_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_posts(inputs)
	return zh_nav_posts(inputs)
});