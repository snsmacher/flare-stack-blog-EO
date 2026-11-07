/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Posts_TitleInputs */

const zh_posts_title = /** @type {(inputs: Posts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部文章`)
};

const en_posts_title = /** @type {(inputs: Posts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Posts`)
};

/**
* | output |
* | --- |
* | "All Posts" |
*
* @param {Posts_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_title = /** @type {((inputs?: Posts_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_title(inputs)
	return zh_posts_title(inputs)
});