/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Posts_Not_Found_AllInputs */

const zh_posts_not_found_all = /** @type {(inputs: Posts_Not_Found_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部文章`)
};

const en_posts_not_found_all = /** @type {(inputs: Posts_Not_Found_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View all posts`)
};

/**
* | output |
* | --- |
* | "View all posts" |
*
* @param {Posts_Not_Found_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_not_found_all = /** @type {((inputs?: Posts_Not_Found_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_Not_Found_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_not_found_all(inputs)
	return zh_posts_not_found_all(inputs)
});